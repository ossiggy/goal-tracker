import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';

export default class Timed extends Component{

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
          <Modal.Title id="timed-modal-title">Timed</Modal.Title>
          <h2>AReach a goal in a certain time frame</h2>
        </Modal.Header>
      </Modal>
    );
  }
}