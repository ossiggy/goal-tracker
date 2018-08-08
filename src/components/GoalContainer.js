import React, {Component} from 'react';

import Goal from './Goal';

export default class GoalContainer extends Component{

  constructor(props){
    super(props);
    this.state={
      goals: [
        {name: "Car Sales", goal: "Sell 204 Cars", now: 35}, 
        {name: "Go to Gym", goal: "Go to the gym 3 times this week", now: 66}
      ]
    }
  }

  render(){

    let goals;

    if(Object.keys(this.state.goals)){
      goals = this.state.goals.map((goal, i) => {
        return <Goal key= {i} name={goal.name} goal={goal.goal} now={goal.now} />
      })
    }
    
    return(
      <div className="goal-container container">
        {goals}
      </div>
    );
  };
};