import React from 'react';

import Goal from './Goal';

export default function GoalContainer(props){
  
  let goals;
  props.goals.forEach(goal => {
    if(Object.keys(goal)){
      goals = props.goals.map((goal, i) => {
        return <Goal key= {i} name={goal.name} type={goal.type} goal={goal.goal} now={goal.now} />
      })
    }
})
    
    return(

      <div className="goal-container container">
        {goals}
      </div>
    );
};