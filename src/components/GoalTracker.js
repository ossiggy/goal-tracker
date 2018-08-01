import React, {Component} from 'react';

import {ProgressBar, DropdownButton, MenuItem, Grid, Row, Col} from 'react-bootstrap';
import GoalContainer from './GoalContainer';

export default class GoalTracker extends Component{

  // TODO: iterate over goals kept in state, print out GoalContainer for each
  constructor(props){
    super(props);
    this.state={
      now: 45
    }
  }
  render(){
    return(
      <Grid>
        <Row className="total-progress">
          <Col md={4}>
          <h1 style={{margin: 0, fontSize: "28px"}}>Total Progress</h1>
          </Col>
          <Col md={6}>
            <ProgressBar 
              active 
              bsStyle="success" 
              now={this.state.now} 
              style={{height: "30px", fontSize: "24px"}}
              />
          </Col>
          <Col md={2} className="pull-right">
            <DropdownButton 
            bsStyle="success"
            title="Add a Goal"
            id="add-a-goal-button"
            >
            <MenuItem eventKey="1">Incremental</MenuItem>
            <MenuItem eventKey="2">Timed</MenuItem>
            <MenuItem eventKey="3">One-and-Done</MenuItem>
            </DropdownButton>
          </Col>
        </Row>
        <Row className="active-goals">
          <Col md={12}>
            <h2 className="tracker-heading">Active Goals</h2>
          </Col>
          <GoalContainer />
        </Row>
      </Grid>
    );
  };
}