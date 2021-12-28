import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import Filter from "./components/Filter";
import Table from "./components/Table/Table";
import Action from "./components/Action";
import { statusList } from "./constants.js";
import EditForm from "./components/EditForm";
import "./App.css";

function App() {
  // const [todo, setTodo] = useState([]);
  // localStorage.removeItem("todo");
  useEffect(() => {
    document.title = "Todo List";
  });

  const todo = JSON.parse(localStorage.getItem("todo")) ?? [];
  /* if (record.length !== todo.length) {
    setTodo(record);
  } */

  const [open, setOpen] = useState(false);
  const todoTaskList = () => {
    return todo.map((task) => {
      const { title = "", color = "#000" } =
        statusList.find((el) => parseInt(el.id) === parseInt(task.status)) ??
        {};
      return {
        ...task,
        status: <span style={{ color }}>{title}</span>,
        action: <Action id={task.id} />,
      };
    });
  };

  const handleModal = () => {
    setOpen(!open);
  };

  return (
    <div className="App">
      <EditForm open={open} handleClose={handleModal} />
      <header className="App-header">
        <h2>Todo List</h2>
        <div className="todo-list-controller">
          <Button text="+" onclick={handleModal} />
          <Filter />
        </div>
      </header>
      <section className="App-body">
        <div className="task-table">
          <Table data={todoTaskList()} />
        </div>
      </section>
    </div>
  );
}

export default App;
