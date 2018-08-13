import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';

export default class Conditional extends Component{

  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  // onSubmit action to add goal to state

    onHide(){
      if(this.props.onHide){
        this.props.onHide();
      }
    }

  render(){
    return(
      <Modal show={this.props.show} onHide={this.onHide}>
        <Modal.Header closeButton>
          <Modal.Title id="conditional-modal-title">Conditional</Modal.Title>
          <h5>Will only update if certain conditions are met. Remember to check in every day!</h5>
        </Modal.Header>
      </Modal>
    );
  }
}