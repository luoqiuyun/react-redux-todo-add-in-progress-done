import React from 'react';
import { connect } from 'react-redux';
import List from './List';

const Board = () => (
    <div className="project-board">
        <List status="TODO"> 
            Tasks ToDo
        </List>
        <List status="DOING"> 
            Tasks in Progress
        </List>
        <List status="DONE"> 
            Tasks Done
        </List>
    </div>
);

export default Board;