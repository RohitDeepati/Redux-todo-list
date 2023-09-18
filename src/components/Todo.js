import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo, completedTodo } from "../features/todo/todoSlice";

export const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div className="todo-container ">
        <ul className="todo-list">
          {todos.map((todo) => (
            <div className="todo">
              <li
                key={todo.id}
                className={`todo-item ${
                  todo.completed ? "strike-through" : ""
                }`}
              >
                {todo.text}
                <button
                  className="trash-btn"
                  onClick={() => dispatch(removeTodo(todo.id))}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
                <button
                  className="complete-btn"
                  onClick={() => dispatch(completedTodo(todo.id))}
                >
                  <FontAwesomeIcon icon={faCheck} />
                </button>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};
