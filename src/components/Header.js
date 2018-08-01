import React from 'react';
import {Grid} from 'react-bootstrap';

export default function Header(props){
  return(
    <Grid className="header" fluid={true}>
      <h1 className="title">Goal Tracker</h1>
    </Grid>
  );
}