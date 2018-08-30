import React, {Component} from 'react';

import {ProgressBar, DropdownButton, MenuItem, Grid, Row, Col} from 'react-bootstrap';
import GoalContainer from './GoalContainer';

import Timed from './modals/Timed';

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
          actual: 50
        },
        {
          // TODO: come up with a time keeper that checks if goal was updated daily
          // Do I call this timed? Or conditional?
          type: "Timed",
          name: "Code Everyday",
          goal: "1 week",
          target: 7,
          actual: 7,
        }
      ],
      showTimed: false,
      showConitional: false,
      showOneAndDone:false,
      showIncremental:false,
      completedGoals: []
    }

    this.addGoal = this.addGoal.bind(this);
  };


  addGoal(newGoal) {
    console.log(this.state)
    this.setState({
      goals:[...this.state.goals, newGoal]
    })
  }

  showModal(type){
    this.setState({[type]: true})
  }

  hideModal(type){
    this.setState({[type]: false})
  }

  render(){
    let now=0;
    let totalToCompletion = 0;
    let currentProgress = 0;
    const goals = this.state.goals

    if(goals){
      goals.forEach(goal=>{
        totalToCompletion += 100;
        currentProgress+= (goal.actual / goal.target) * 100;
      })
      now = (currentProgress / totalToCompletion) * 100
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
              style={{height: "34px"}}
              />
          </Col>
          <Col md={2} className="pull-right">
            <DropdownButton 
            bsStyle="success"
            title="Add a Goal"
            id="add-a-goal-button"
            >
            <MenuItem eventKey="incremental">Incremental</MenuItem>
            <MenuItem eventKey="timed" onClick={()=>this.showModal("showTimed")}>Timed</MenuItem>
            <MenuItem eventKey="conditional">Conditional</MenuItem>
            <MenuItem eventKey="one-and-done">One-and-Done</MenuItem>
            </DropdownButton>
            <Timed show={this.state.showTimed} onHide={()=>this.hideModal("showTimed")} addGoal={goal=>this.addGoal(goal)}/>
          </Col>
        </Row>
        <Row className="active-goals">
          <Col md={12}>
            <h2 className="tracker-heading">Active Goals</h2>
          </Col>
          <GoalContainer goals={this.state.goals}/>
        </Row>
      </Grid>
    );
  };
}