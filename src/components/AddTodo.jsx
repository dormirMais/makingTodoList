import React from "react";
import "./AddTodo.css";

export default function AddTodo({ addTodo }) {
  return (
    <section className="addTodoSection">
      <form className="addTodoForm" onSubmit={addTodo}>
        <input
          className="addTodoInput"
          name="todoinput"
          placeholder="Add Todo"
          type="text"
        />
        <input className="addTodoSubmitBtn" type="submit" value={"ADD"} />
      </form>
    </section>
  );
}
