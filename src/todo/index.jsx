import React from "react";
import TodoHeader from "../components/todoHeader/TodoHeader";
import './style.scss'

export default function Todo() {
  return (
    <>
      <div className="todo-container">
        <h1 className="todo-title">Manage Your TODO</h1>
        <TodoHeader/>
      </div>
    </>
  );
}
