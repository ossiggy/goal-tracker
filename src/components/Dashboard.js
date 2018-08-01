import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';

import GoalTracker from './GoalTracker';

export default class Dashboard extends Component{

  render(){
    return (
      <Grid className="dashboard" fluid={true}>
        <GoalTracker />
      </Grid>
    );
  }
}