import React from 'react';

import Goal from './Goal';

export default function GoalContainer(props){
  
  let goals;
  props.goals.forEach(goal => {
    if(Object.keys(goal)){
      goals = props.goals.map((goal, i) => {
        const now = (goal.actual / goal.target) * 100
        return <Goal key= {i} name={goal.name} type={goal.type} goal={goal.goal} now={now} />
      })
    }
})
    
    return(

      <div className="goal-container container">
        {goals}
      </div>
    );
};