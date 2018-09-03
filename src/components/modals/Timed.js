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
    description:'',
    startDate: moment(),
    endDate: moment().add(1, 'day'),
    touched: {
      name: false,
      description: false
    }
  }

  this.handleInputChange = this.handleInputChange.bind(this);
  this.handleBlur = this.handleBlur.bind(this);
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
  }

  handleChange = ({ startDate, endDate }) => {
    startDate = startDate || this.state.startDate
    endDate = endDate || this.state.endDate

    if (startDate.isAfter(endDate)) {
      endDate = startDate
    }

    this.setState({ startDate, endDate })
  }

  handleChangeStart = (startDate) => this.handleChange({ startDate })

  handleChangeEnd = (endDate) => this.handleChange({ endDate })

  addGoal(e){
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
          <h5 className="description-title">Brief Description</h5>
          <input 
          className={shouldMarkError('description') ? "error" : ""}
          name="description"
          type="textfield"
          onChange={this.handleInputChange} 
          placeholder="Finish this by then etc..."
          />
          <h5 className="modal-form-startdate">When are you starting?</h5>
          <DatePicker
          customInput={<DatePickerButton />}
          name="startDate"
          minDate={moment()}
          selected={this.state.startDate} 
          onSelect={this.handleChangeStart}
          />
          <h5 className="modal-form-enddate">When are you ending?</h5>
          <DatePicker
          customInput = {<DatePickerButton />}
          name="endDate"
          minDate={moment().add(1, 'day')}
          selected={this.state.endDate}
          onSelect={this.handleChangeEnd}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button disabled={isDisabled} 
          bsStyle="success" 
          onClick={e=> this.addGoal(e)}
          >Save</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}