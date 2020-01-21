import React from "react";
import { connect } from "react-redux"

import Todo from "./Todo";

const TodoList = props => {
    return (
        <ul className="task-list">
            {props.state.map(task => (
                <Todo task={task} />
            ))}
        </ul>
    )
}

const mapStateToProps = state => {
    return {
        state: state
    }
};

export default connect(mapStateToProps)(TodoList);