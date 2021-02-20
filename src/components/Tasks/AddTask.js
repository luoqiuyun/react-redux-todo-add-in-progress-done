import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../store/actions/tasks-actions';

const AddTask = ({ dispatch, state }) => {
  let inputText, inputExecutor;

  const submitTask = (e) => {
    e.preventDefault();

    if (!inputText.value.trim())
        return;
        
    dispatch(addTask({
        text: inputText.value,
        executor: inputExecutor.value.trim() ? inputExecutor.value : 'All'
    }));

    inputText.value = '';
    inputExecutor.value = '';
  };

  return (
    <div className="form-container">
      <form onSubmit={submitTask}>
        <input className="task-form-text" placeholder="New task title ..." ref={node => inputText = node} />
        <input className="task-form-executor" placeholder="Who will be in charge ..." ref={node => inputExecutor = node} />
        <input className="task-form-submit" type="submit" value="Add"/>
      </form>
    </div>
  );
};

export default connect()(AddTask);