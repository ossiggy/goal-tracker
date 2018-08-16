import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import validateTimed from '../../validator';
import DatePickerButton from '../DatePickerButton';

import 'react-datepicker/dist/react-datepicker.css';

export default class Timed extends Component{

constructor(props){
  super(props);
  this.state = {
    name:'',
    timeFrame: '',
    quantity:"1",
    additionalInput:'',
    dividedBy:"1",
    startDate: moment(),
    touched: {
      name: false,
      timeFrame: false,
      quantity: false,
      additionalInput: false,
      dividedBy: false
    }
  }

  this.handleInputChange = this.handleInputChange.bind(this);
  this.handleBlur = this.handleBlur.bind(this);
  this.changeStartDate = this.changeStartDate.bind(this);
}

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: {...this.state.touched, [field]:true}
    })
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    if(name==='dividedBy'){
      console.log(value)
    }
    this.setState({[name]: value});
  }

  changeStartDate(date){
    this.setState({
      startDate: date
    });
  }

  appendInput(type){
    if(type==="year"){
      this.setState({additionalInput: "yearly"})
    };
    if(type==="month"){
      this.setState({additionalInput: "monthly"})
    };
    if(type==="week"){
      this.setState({additionalInput: "weekly"})
    };
    if(type==="day"){
      this.setState({additionalInput: "daily"})
    };
  }

  // if monthly, use date array to check if it has been a month for goal to complete
  // if month judged weekly, I have to find a way to see how many weeks are left in the month
  // maybe set beginning and end range of how long the month is
  // the date array gives me information on the month, days of the week, and the date

  checkDateInfo(date){

  }

  addGoal(event) {

    // function leapYear(year)
    // {
    //   return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
    // }

    const state = this.state;
    // const month = state.startDate._d.toString().split(" ")[1];
    // const year = state.startDate._d.toString().split(" ")[3];
    // const isLeapYear = leapYear(year);

    // const thirtyDays = ["Sep", "Apr", "Jun", "Nov"];
    // const feb = "Feb";

    // if(month===feb&&state.additionalInput==="monthly"&&state.dividedBy==="31"&&isLeapYear){
    //   this.setState({dividedBy: "29"})
    // }

    // if(month===feb&&state.additionalInput==="monthly"&&state.dividedBy==="31"&&!isLeapYear){
    //   this.setState({dividedBy: "28"})
    // }
    // console.log(year, isLeapYear, state.dividedBy)
    // type: "Timed",
    // name: "Code Everyday",
    // goal: "1 week",
    // target: 7,
    // actual: 7,

   
    if(this.props.addGoal){
      console.log(state.startDate._d.toString().split(" "))
    }
  }

  canBeSubmitted() {
    const errors = validateTimed(this.state);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  render(){

    const shouldMarkError = (field) => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];

      return hasError ? shouldShow : false;
    };

    const errors = validateTimed(this.state);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    
    let additional;

    if(this.state.additionalInput){

      if(this.state.additionalInput==="yearly"){
        additional = (
          <select 
          className={shouldMarkError('dividedBy') ? "error" : ""} 
          name="dividedBy" 
          onChange={this.handleInputChange}
          onBlur={this.handleBlur('dividedBy')}
          >
            <option value="undefined">Judge Progress</option>
            <option value="1">Yearly</option>
            <option value="12">Monthly</option>
            <option value="52">Weekly</option>
            <option value="365">Daily</option>
          </select>
        );
      }

      if(this.state.additionalInput==="monthly"){
        additional = (
          <select 
          className={shouldMarkError('dividedBy') ? "error" : ""} 
          name="dividedBy" 
          onChange={this.handleInputChange}
          onBlur={this.handleBlur('dividedBy')}
          >
            <option value="undefined">Judge Progress</option>
            <option value="1">Monthly</option>
            <option value="4">Weekly</option>
            <option value="31">Daily</option>
          </select>
        );        
      }

      if(this.state.additionalInput==="weekly"){
        additional = (
          <select 
          className={shouldMarkError('dividedBy') ? "error" : ""} 
          name="dividedBy" 
          onChange={this.handleInputChange}
          onBlur={this.handleBlur('dividedBy')}
          >
            <option value="undefined">Judge Progress</option>
            <option value="1">Weekly</option>
            <option value="7">Daily</option>
          </select>
        );        
      }

      if(this.state.additionalInput==="daily"){
        additional = "";
      }
    }

    return(

      <Modal show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton style={{backgroundColor:"lightblue", color:"white"}}>
          <Modal.Title id="timed-modal-title" elementtype='h1'>Timed</Modal.Title>
          <h5>Reach a goal in a certain time frame</h5>
        </Modal.Header>
        <Modal.Body componentClass="form">
          <input 
          className={shouldMarkError('name') ? "error" : ""} 
          name="name" 
          type="text" 
          value={this.state.name} 
          onChange={this.handleInputChange} 
          onBlur={this.handleBlur('name')}
          placeholder="Goal name?"/>
          <h5 className="modal-form-timeframe">What's the timeframe?</h5>
          <input 
          className={shouldMarkError('quantity') ? "error" : ""}
          name="quantity"
          type="number"
          min="1" 
          value={this.state.quantity}
          onChange={this.handleInputChange} 
          onBlur={this.handleBlur('quantity')}
          placeholder="0"
          style={{width:"50px"}}
          />
          <select 
          className={shouldMarkError('timeFrame') ? "error" : ""}
          name="timeFrame"
          value={this.state.timeFrame} 
          onChange={e=>{
            this.handleInputChange(e)
            this.appendInput(e.target.value)
            }}
          onBlur={this.handleBlur('timeFrame')}  
            >
            <option value="undefined">Choose One</option>
            <option value="day">Day(s)</option>
            <option value="week">Week(s)</option>
            <option value="month">Month(s)</option>
            <option value="year">Year(s)</option>
          </select>
          {additional}
          <h5 className="modal-form-startdate">When are you starting?</h5>
          <DatePicker
          customInput={<DatePickerButton />}
          name="startDate"
          minDate={moment()}
          selected={this.state.startDate} 
          onSelect={this.changeStartDate}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button disabled={isDisabled} 
          bsStyle="success" 
          onClick={(e)=>this.addGoal(e)}
          >Save</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}