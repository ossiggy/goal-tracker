import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';

export default class Incremental extends Component{

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
          <Modal.Title id="incremental-modal-title">Incremental</Modal.Title>
          <h2>Set a goal, advance one step at a time</h2>
        </Modal.Header>
      </Modal>
    );
  }
}