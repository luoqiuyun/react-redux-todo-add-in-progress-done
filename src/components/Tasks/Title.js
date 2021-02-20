import React from 'react';
import { connect } from 'react-redux';

const Title = ({ cardsCount }) => (
    <div className="project-info">
        <h1>Tasks To Do Board</h1>
        <p>{cardsCount} tasks in total on board</p>
        <span>Input task title and executor name for creating a new todo task. </span>
    </div>
);

const mapStateToProps = (state) => {
    return { 
        cardsCount: state.length
    };
};

export default connect(mapStateToProps)(Title);