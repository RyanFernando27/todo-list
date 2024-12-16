import React, { useState } from "react";

export const EditTodoform = ({ editTodo, task }) => {
  const [value, setValues] = useState(task.task);

  /**
   * when submit the value write in the textbox it will display .
   * @param {event} e
   */
  const handelSubmit = (e) => {
    e.preventDefault(); // to prevent page from reloading use this method
    editTodo(value, task.id);
    setValues("");
  };

  return (
    <form className="TodoForm" onSubmit={handelSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Update Task!"
        onChange={(e) => setValues(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};
