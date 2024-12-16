import React, { useState } from "react";

export const Todoform = ({ addTodo }) => {
  const [value, setValues] = useState("");

  /**
   * when submit the value write in the textbox it will display .
   * @param {event} e
   */
  const handelSubmit = (e) => {
    e.preventDefault(); // to prevent page from reloading use this method
    addTodo(value);
    setValues("");
  };

  return (
    <form className="TodoForm" onSubmit={handelSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="What is the task Today!!"
        onChange={(e) => setValues(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
