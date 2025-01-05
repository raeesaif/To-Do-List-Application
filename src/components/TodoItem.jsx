// import React from 'react';

// function TodoItem({ todo, toggletodo, deletetodo }) {
//   return (
//     <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
//       <span>{todo.text}</span>
//       <div className="todo-actions">
//         <button  onClick={() => toggletodo(todo.id)} className="toggle-btn">
//           {todo.completed ? 'Completed' : 'Mark as Complete'}
//         </button>
//         <button onClick={() => deletetodo(todo.id)} className="delete-btn">
//           Delete
//         </button>
//       </div>
//     </li>
//   );
// }

// export default TodoItem;


// In TodoItem.jsx
import React from 'react';

function TodoItem({ todo, toggletodo, deletetodo }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span>{todo.text}</span>
      <div className="todo-actions">
        <button onClick={() => toggletodo(todo.id)} className="toggle-btn">
          {todo.completed ? 'Completed' : 'Mark as Complete'}
        </button>
        <button onClick={() => deletetodo(todo.id)} className="delete-btn">
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;  // Ensure default export
