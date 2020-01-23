import React from "react";
import { TOGGLE_COMPLETED } from "../actions/actions";

const Todo = props => (
    <p>{props.task.item}</p>
)

export default Todo;