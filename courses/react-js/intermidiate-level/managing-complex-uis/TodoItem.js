import React from "react";

function TodoItem({ todo, toggleTodo }) {
  const { id, text, completed } = todo;

  const handleToggle = () => {
    toggleTodo && toggleTodo(id);
  };
 

  return (
    <div style={{ marginBottom: "5px" }}>
      <span
        style={{
          textDecoration: completed ? "line-through" : "none",
          marginLeft: "10px",
          cursor: "pointer",
          color: completed ? "var(--ifm-task-complete-color)" : "var(--ifm-task-incomplete-color)",
        }}

        onClick={handleToggle}
      >
        {text}
      </span>
    </div>
  );
}

export default TodoItem;