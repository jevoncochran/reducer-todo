import React, { useState } from "react";
import { connect } from "react-redux";

import { addItem, removeCompleted } from "../actions/actions";

const TodoForm = props => {
    const [newItemText, setNewItemText] = useState("");

    const handleChanges = e => {
        setNewItemText(e.target.vaue);
    };

    const addTask = e => {
        e.preventDefault();
        props.addItem(newItemText);
    }

    const removeCompletedTask = e => {
        e.preventDefault();
        props.removeCompleted();
    }

    return (
        <div className="form-div">
            <input
                className="add-input"
                name="todo"
                type="text"
                placeholder="Enter a task"
                value={newItemText}
                onChange={handleChanges}
            />
            <button
                className="add-button"
                onClick={addTask}
            >
                Add a Task
            </button>
            <button
                className="add-button"
                onClick={removeCompletedTask}
            >
                Remove Completed
            </button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        state: state
    }
}

export default connect (mapStateToProps, {addItem, removeCompleted})(TodoForm);