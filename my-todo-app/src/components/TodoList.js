import React, { useState, useReducer } from"react";

import Todo from "./Todo";
import { initialState, reducer } from "../reducers/todoReducer";
import { ADD_ITEM } from "../actions/actions";


const TodoList = props => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [newItemText, setNewItemText] = useState("");

    const handleChanges = e => {
        console.log(e.target.value)
        setNewItemText(e.target.vaue);
    };

    console.log(newItemText);

    return (
        <div>
            <ul className="task-list">
                {state.map(task => (
                    <Todo key={task.item} task={task} />
                ))}
            </ul>
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
                onClick={() => dispatch({ type: ADD_ITEM, payload: newItemText })}
            >
                Add a Task
            </button>
            <button
                className="add-button"
                onClick={null}
            >
                Remove Completed
            </button>
            </div>
    )
}

export default TodoList;