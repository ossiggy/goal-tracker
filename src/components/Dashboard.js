import React, {Component} from 'react';

import GoalTracker from './GoalTracker';

export default class Dashboard extends Component{

  render(){
    return (
      <div className="dashboard container">
        <GoalTracker now={45}/>
      </div>
    );
  }
}