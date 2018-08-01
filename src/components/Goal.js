import React from 'react';

import {ProgressBar, Button, Grid, Row, Col} from 'react-bootstrap';

export default function Goal(props){
  return(
    <Grid fluid={true}>
      <Row className="goal-container">
        <Col className="goal-container-name" md={12}>
          <h3>{props.name}</h3>
        </Col>
        <Col className="goal-container-goal" md={12}>
          <h4>{props.goal}</h4>
        </Col>
      </Row>
      <Row className="goal-progress">
        <Col md={6}>
          <ProgressBar bsStyle="success" now={props.now} />
        </Col>
      </Row>
      <Row className="button-container">
        <Col md={1} xs={4}>
          <Button bsStyle="info">Edit</Button>
        </Col>
        <Col md={1} xs={4}>
          <Button bsStyle="success">Progress</Button>
        </Col>
      </Row>
    </Grid>
  )
}