import { useRef } from 'react';

import classes from './TaskForm.module.css';

const TaskForm = (props) => {
  const taskInputRef = useRef();

  const submitHandler = (event) => {


    const enteredValue = taskInputRef.current.value;

    if (enteredValue.trim().length > 0) {
      props.onEnterTask(enteredValue);
    }
    event.preventDefault();
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input type='text' ref={taskInputRef} />
      <button>{props.loading ? 'Sending...' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
