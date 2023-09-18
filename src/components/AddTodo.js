import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    input && addTodo(input);
    setInput("");
  };

  return (
    <section className="container">
      <div>
        <form onSubmit={submitHandler}>
          <input
            className="todo-input"
            type="text"
            placeholder="What are your plans today?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button disabled={!input} className="todo-button">
            Add
          </button>
        </form>
      </div>
    </section>
  );
};
