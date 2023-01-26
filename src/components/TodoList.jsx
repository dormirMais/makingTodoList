import React from "react";
import Todo from "./Todo";
import "./TodoList.css";

export default function TodoList({
  todoList,
  handleChecked,
  selected,
  removeTodo,
}) {
  let newTodoList = todoList;
  if (selected === "active") {
    newTodoList = newTodoList.filter((todo) => {
      return todo.state === false;
    });
  }
  if (selected === "completed") {
    newTodoList = newTodoList.filter((todo) => {
      return todo.state === true;
    });
  }

  return (
    <section className="todoListSection">
      <ul className="todoListUl">
        {newTodoList?.map((todo) => (
          <Todo
            todo={todo}
            handleChecked={handleChecked}
            removeTodo={removeTodo}
            key={todo.id}
            id={todo.id}
          />
        ))}
      </ul>
    </section>
  );
}
