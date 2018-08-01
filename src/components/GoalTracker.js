import React, {Component} from 'react';

import {ProgressBar, Grid, Row, Col} from 'react-bootstrap';
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
          <Col md={2}>
            Total Progress
          </Col>
          <Col md={6}>
            <ProgressBar active bsStyle="success" now={this.state.now} label={`${this.state.now}%`} />
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