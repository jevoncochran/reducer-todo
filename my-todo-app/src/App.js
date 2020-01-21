import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoList />
      <TodoForm />
    </div>
  );
}

export default App;
