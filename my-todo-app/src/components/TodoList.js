import React, { useState, useReducer } from"react";

import Todo from "./Todo";
import { initialState, reducer } from "../reducers/todoReducer";
import { ADD_ITEM, TOGGLE_COMPLETE, REMOVE_COMPLETED, TOGGLE_COMPLETED } from "../actions/actions";


const TodoList = props => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [newItemText, setNewItemText] = useState("");

    const handleChanges = e => {
        console.log(e.target.value)
        setNewItemText(e.target.value);
    };

    console.log(newItemText);

    return (
        <div>
            <ul className="task-list">
                {state.map(task => (
                    <li
                        className={task.completed ? "completed" : "outstanding"} 
                        onClick={() => dispatch({ type: TOGGLE_COMPLETED, payload: task.id })}
                    >
                    <Todo key={task.item} task={task} />
                    </li>
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
                onClick={() => dispatch({ type: REMOVE_COMPLETED })}
            >
                Remove Completed
            </button>
            </div>
    )
}

export default TodoList;