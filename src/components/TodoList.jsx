import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todo, toggletodo, deletetodo }) => {
  return (
    <div>
      <ul>
        {todo.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggletodo={toggletodo}
              deletetodo={deletetodo}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
