import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css';
import {ICourseGoal}  from "../../../App";

interface ICourseGoalList {
  items: ICourseGoal[];
  onDeleteItem:(id : string) => void;
}

const CourseGoalList = (props : ICourseGoalList) => {
  return (
    <ul className="goal-list">
      {props.items.map(goal => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
