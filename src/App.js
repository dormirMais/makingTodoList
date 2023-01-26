import { useEffect, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import uuid from "react-uuid";
import { readDataFromLocalStorage } from "./components/api";

function App() {
  const [selected, setSelected] = useState("all");
  const [todoList, setTodoList] = useState(readDataFromLocalStorage());

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const handleOnClick = (e) => {
    e.preventDefault();
    setSelected(e.target.name);
  };

  const addTodo = (e) => {
    e.preventDefault();
    const todo = e.target.todoinput.value;
    if (todo.trim() === "") {
      alert("you should put message");
      return;
    }
    e.target.todoinput.value = "";
    setTodoList((prev) => {
      return [...prev, { title: todo, state: false, id: uuid() }];
    });
  };

  const handleChecked = (id) => {
    let newTodoList = [...todoList];
    newTodoList = newTodoList.map((todo) => {
      if (todo.id === id) todo.state = !todo.state;
      return todo;
    });
    setTodoList(newTodoList);
  };

  const removeTodo = (id) => {
    let newTodoList = [...todoList];
    newTodoList = newTodoList.filter((todo) => {
      return todo.id !== id;
    });
    setTodoList(newTodoList);
  };

  console.log(selected);
  console.log(todoList);
  return (
    <>
      <section className="todoList">
        <Header handleOnClick={handleOnClick} />
        <TodoList
          selected={selected}
          todoList={todoList}
          handleChecked={handleChecked}
          removeTodo={removeTodo}
        />
        <AddTodo addTodo={addTodo} />
      </section>
    </>
  );
}

export default App;
