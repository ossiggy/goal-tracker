import React from 'react';

import {ProgressBar, Button, Grid, Row, Col} from 'react-bootstrap';

export default function Goal(props){
  return(
    <Grid>
      <Row>
        <Col className="goal-container-name" md={12}>{props.name}</Col>
        <Col className="goal-container-goal" md={12}>{props.goal}</Col>
        <Row>
          <Col md={6}>
            <ProgressBar active bsStyle="success" now={props.now} label={`${props.now}%`} />
          </Col>
        </Row>
          <Row className="button-row">
            <Col md={1}>
              <Button bsStyle="info">Edit</Button>
            </Col>
            <Col md={1}>
              <Button bsStyle="success">Complete</Button>
            </Col>
          </Row>
      </Row>
    </Grid>
  )
}