import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import Filter from "./components/Filter";
import Table from "./components/Table/Table";
import Action from "./components/Action";
import { status } from "./constants.js";
import EditForm from "./components/EditForm";
import ViewTodo from "./components/ViewTodo";
import "./App.css";

function App() {
  const todo = JSON.parse(localStorage.getItem("todo"));
  const [open, setOpen] = useState(false);
  const [isView, setIsView] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState({});
  const [operation, setOperation] = useState({
    id: "",
    type: "add",
  });

  // localStorage.removeItem("todo");
  useEffect(() => {
    document.title = "Todo List";
  });

  const actionHandler = (id, type) => {
    setOperation({
      id,
      type,
    });
    const todoItem = todo.find((item) => item.id === id);
    setSelectedTodo(todoItem);
    switch (type) {
      case "edit":
        setOpen(true);
        break;
      case "view":
        setIsView(true);
        break;
      default:
    }
  };

  const todoTaskList = () => {
    return todo.map((task) => {
      const { label = "", color = "#000" } =
        status.find((el) => parseInt(el.value) === parseInt(task.status)) ?? {};
      return {
        ...task,
        status: <span style={{ color }}>{label}</span>,
        action: <Action id={task.id} actionHandler={actionHandler} />,
      };
    });
  };

  const handleCloseModal = () => {
    setSelectedTodo({});
    setOperation({
      id: "",
      type: "add",
    });
    setIsView(false);
    setOpen(false);
  };

  return (
    <div className="App">
      <EditForm
        open={open}
        handleClose={handleCloseModal}
        operation={operation}
        selectedTodo={selectedTodo}
      />

      <ViewTodo
        open={isView}
        handleClose={handleCloseModal}
        selectedTodo={selectedTodo}
      />
      <header className="App-header">
        <h2>Todo List</h2>
        <div className="todo-list-controller">
          <Button text="+" onclick={() => setOpen(true)} />
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
