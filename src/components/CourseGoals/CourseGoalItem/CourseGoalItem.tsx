import React, {HTMLAttributes, PropsWithChildren, ReactChildren} from "react";

import './CourseGoalItem.css';

interface ICourseGoalItem extends HTMLAttributes<HTMLElement> {
  onDelete: (id: string) => void;
  id: string;
}

const CourseGoalItem = (props : ICourseGoalItem) => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
