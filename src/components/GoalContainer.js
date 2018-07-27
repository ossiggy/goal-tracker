import React from 'react';

import {ProgressBar, Button} from 'react-bootstrap';
import Goal from './Goal';

export default function GoalContainer(props){
  return(
    <div className="goal-container container">
      {/* TODO: pass thru name prop */}
      <Goal now={25} name={'Car Sales'} goal={'sell 204 cars'} />
    </div>
  )
}