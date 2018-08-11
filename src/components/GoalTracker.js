import React, {Component} from 'react';

import {ProgressBar, DropdownButton, MenuItem, Button, Grid, Row, Col} from 'react-bootstrap';
import GoalContainer from './GoalContainer';

export default class GoalTracker extends Component{

  // TODO: iterate over goals kept in state, print out GoalContainer for each
  constructor(props){
    super(props);
    this.state={
      now: 45,
      goals: [
        {
          type: "Incremental",
          name: "Car Sales",
          goal: "200 cars",
          target: 200,
          actual: 20,
          now: 10
          // TODO: now is going to start at 0 and will be recalculated with each progress
          // increment.  This could be tricky, but having a global state with redux should help
        },
        {
          type: "Timed",
          name: "Code For A week",
          goal: "1 week",
          now: 30
        }
      ]
    }
  }

  // TODO: call with componentWillMount when Redux is added

  calculateTotalGoalProgress(goals){
    let total=0, divisor=0;
    goals.forEach(goal=>{
      total += 100;
      divisor+= goal.now;
    })
    this.setState ({
      now: (divisor / total)*100
    })
  }

  // TODO: create action to calculate individual total progression

  calculateIndividualGoalProgress(goal){
    let total=0; 
  }

  selectIncremental(event){

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