import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';

export default class OneAndDone extends Component{

  constructor(props){
    super(props);
    this.state = {
      
    }
  }

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
          <h5>A one-time goal that's either complete, or it isn't</h5>
        </Modal.Header>
      </Modal>
    );
  }
}