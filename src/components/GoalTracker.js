import React, {Component} from 'react';

import {ProgressBar, DropdownButton, MenuItem, Button, Grid, Row, Col} from 'react-bootstrap';
import GoalContainer from './GoalContainer';

export default class GoalTracker extends Component{

  // TODO: iterate over goals kept in state, print out GoalContainer for each
  constructor(props){
    super(props);
    this.state={
      goals: [
        {
          type: "Incremental",
          name: "Car Sales",
          goal: "200 cars",
          target: 200,
          actual: 20
        },
        {
          type: "Timed",
          name: "Code Everyday",
          goal: "1 week",
          target: 7,
          actual: 1,
        }
      ],
      show: false
    }
  };


  selectIncremental(event){

  }


  render(){
    let now=0;
    let totalToCompletion = 0;
    let currentProgress = 0;
    const goals = this.state.goals

    if(goals){
      goals.forEach(goal=>{
        totalToCompletion += 100;
        currentProgress+= goal.now;
      })
      now = (currentProgress / totalToCompletion) * 100
      console.log(now)
    }

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
              now={now} 
              style={{height: "30px", "marginTop": "10px"}}
              />
          </Col>
          <Col md={2} className="pull-right">
            <DropdownButton 
            bsStyle="success"
            title="Add a Goal"
            id="add-a-goal-button"
            >
            <MenuItem eventKey="1" onSelect={()=> alert('selected 1')}>Incremental</MenuItem>
            <MenuItem eventKey="2">Timed</MenuItem>
            <MenuItem eventKey="3">One-and-Done</MenuItem>
            </DropdownButton>
          </Col>
        </Row>
        <Row className="active-goals">
          <Col md={12}>
            <h2 className="tracker-heading">Active Goals</h2>
          </Col>
          <Col md={1} xs={4}>
            <Button bsStyle="success">Calculate</Button>
          </Col>
          <GoalContainer goals={this.state.goals}/>
        </Row>
      </Grid>
    );
  };
}