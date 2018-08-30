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
    quantity:0,
    startDate: moment(),
    completeDate: '',
    touched: {
      name: false,
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
    this.setState({[name]: value});
    console.log(this.state)
    if(this.state.timeFrame.length>0&&name==="quantity"){
      this.setState({
        completeDate: this.state.startDate.add(value, this.state.timeFrame)
      })
    }
    if(name==="timeFrame"&&this.state.quantity>0){
      this.setState({
        completeDate: this.state.startDate.add(this.state.quantity, value)
      })
    }
  }

  changeStartDate(date){
    this.setState({
      startDate: date,
    })
  }

  addGoal(e) {
    e.preventDefault()
    if(this.props.addGoal){
      console.log(this.state)
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
          placeholder="0"
          style={{width:"50px"}}
          />
          <select 
          className={shouldMarkError('timeFrame') ? "error" : ""}
          name="timeFrame"
          value={this.state.timeFrame}
          onChange={this.handleInputChange}
            >
            <option value=''>Choose one</option>
            <option value="day">Day(s)</option>
            <option value="week">Week(s)</option>
            <option value="months">Month(s)</option>
            <option value="year">Year(s)</option>
          </select>
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