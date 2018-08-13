import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';

export default class OneAndDone extends Component{

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
          <Modal.Title id="one-and-done-modal-title">One and Done</Modal.Title>
          <h2>A one-time goal that's either complete, or it isn't</h2>
        </Modal.Header>
      </Modal>
    );
  }
}