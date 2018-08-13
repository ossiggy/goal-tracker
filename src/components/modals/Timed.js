import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

export default class Timed extends Component{

constructor(props){
  super(props);
  this.state = {
    timeFrame: null,
    quantity:0,
    additionalInput:null,
    startDate: moment(),
    completeDate:null
  }

  this.handleInputChange = this.handleInputChange.bind(this);
  this.changeStartDate = this.changeStartDate.bind(this);
}

    handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      this.setState({[name]: value});
    }

    changeStartDate(date){
      this.setState({
        startDate: date
      });
    }

    appendInput(type){
      this.setState({additionalInput:null})
      if(type==="year"){
        this.setState({additionalInput: "yearly"})
      };
      if(type==="month"){
        this.setState({additionalInput: "monthly"})
      };
    }

  render(){

    let additional;

    if(this.state.additionalInput){
      if(this.state.additionalInput==="yearly"){
        additional = (
          <select>
            <option value="null">Judge Progress</option>
            <option value="year">Yearly</option>
            <option value="month">Monthly</option>
            <option value="week">Weekly</option>
            <option value="day">Daily</option>
          </select>
        );
      }
      if(this.state.additionalInput==="monthly"){
        additional = (
          <select>
            <option value="null">Judge Progress</option>
            <option value="month">Monthly</option>
            <option value="week">Weekly</option>
            <option value="day">Daily</option>
          </select>
        );        
      }
    }

    return(
      <Modal {...this.props}>
        <Modal.Header closeButton>
          <Modal.Title id="timed-modal-title">Timed</Modal.Title>
          <h5>Reach a goal in a certain time frame</h5>
        </Modal.Header>
        <Modal.Body componentClass="form">
          <h5 className="modal-form-timeframe">What's the timeframe?</h5>
          <input type="number" onChange={this.handleInputChange} placeholder="How Many?"/>
          <select value={this.state.timeFrame} 
          placeholder="Choose one..." 
          onChange={e=>{
            this.handleInputChange(e)
            this.appendInput(e.target.value)
            }}>
            <option value="null">Choose one...</option>
            <option value="year">Year(s)</option>
            <option value="month">Month(s)</option>
            <option value="week">Week(s)</option>
            <option value="day">Day(s)</option>
          </select>
          {additional}
          <h5 className="modal-form-startdate">When are you starting?</h5>
          <DatePicker selected={this.state.startDate} onChange={this.changeStartDate} />
        </Modal.Body>
        <Modal.Footer>
          <Button>Cancel</Button>
          <Button bsStyle="success" onClick={this.saveGoal}>Save</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}