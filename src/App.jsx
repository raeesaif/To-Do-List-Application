import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([])

  const addTodo =(text)=>{
    if(text.trim()){
      setTodos([...todos,{id: Date.now(),text ,completed:false}])
    }
  }
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TodoInput Addtodo={addTodo} />
      <TodoList todo={todos} toggletodo={toggleTodo} deletetodo={deleteTodo} />
    </div>
  );
}

export default App;
