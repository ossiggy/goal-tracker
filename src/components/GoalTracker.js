import React from 'react';

import {ProgressBar, Grid, Row, Col} from 'react-bootstrap';
import GoalContainer from './GoalContainer';

export default function GoalTracker(props){

  // TODO: iterate over goals kept in state, print out GoalContainer for each

  return(
    <Grid>
      <Row style={{height: '28px'}}>
        <Col md={2} style={{'font-size': '20px'}}>
          Total Progress
        </Col>
        <Col md={6}>
          <ProgressBar active bsStyle="success" now={props.now} label={`${props.now}%`} style={{height: '30px'}} />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h2 className="tracker-heading">Active Goals</h2>
        </Col>
        <Col md={12}>
          <GoalContainer />
        </Col>
      </Row>
    </Grid>
  );
}