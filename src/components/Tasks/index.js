import React from 'react';
import Title from './Title';
import AddTask from './AddTask';
import Board from './Board';

import './styles.css';

const Tasks = () => (
  <div>
    <Title />
    <AddTask />
    <span>Click a task card to move it forward to the next list.</span>
    <Board />
  </div>
);

export default Tasks;