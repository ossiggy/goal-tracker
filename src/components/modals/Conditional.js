import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';

export default class Conditional extends Component{

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
          <h2>Will only update if certain conditions are met. Remember to check in every day!</h2>
        </Modal.Header>
      </Modal>
    );
  }
}