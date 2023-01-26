import React from "react";
import "./Todo.css";
import { BsFillTrashFill } from "react-icons/bs";

export default function Todo({ todo, id, handleChecked, removeTodo }) {
  const checkTodo = () => {
    console.log("동작여부 ", id);
    handleChecked(id);
  };
  console.log(todo.state);
  return (
    <section className="todoSection">
      <input
        className="todoCheckBox"
        type="checkbox"
        onChange={checkTodo}
        checked={todo.state ? true : false}
      />
      <li className="todoTitle">{todo.title}</li>

      <BsFillTrashFill className="trashcan" onClick={() => removeTodo(id)} />
    </section>
  );
}
