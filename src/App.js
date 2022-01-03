import React, { useState, useEffect } from "react";
import Button from "./components/common/Button";
import Filter from "./components/Filter";
import Table from "./components/Table/Table";
import Action from "./components/Action";
import { status } from "./constants.js";
import EditForm from "./components/EditForm";
import ViewTodo from "./components/ViewTodo";
import ConfirmModel from "./components/ConfirmModel";
import "./App.css";

function App() {
  let todo = JSON.parse(localStorage.getItem("todo"));
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
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

  useEffect(() => {
    switch (filter) {
      case "done":
        todo = todo.filter((el) => el.status === "2");
        break;
      case "delete":
        todo = todo.filter((el) => el.deleted === true);
        break;
      default:
    }
  }, [filter]);

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
      case "delete":
        setConfirmOpen(true);
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

  const handleConfirm = () => {
    const oldTodo = [...todo];
    const removeTodoIndex = oldTodo.findIndex(
      (el) => el.id === selectedTodo.id
    );
    const deletedTodo = oldTodo.splice(removeTodoIndex, 1);
    localStorage.setItem("todo", JSON.stringify(oldTodo));
    handleCloseModal();
  };
  const handleCloseModal = () => {
    setSelectedTodo({});
    setOperation({
      id: "",
      type: "add",
    });
    setIsView(false);
    setConfirmOpen(false);
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

      <ConfirmModel
        open={confirmOpen}
        handleClose={handleCloseModal}
        handleConfirm={handleConfirm}
        message="Are you sure want to delete?"
        title="Confirmation"
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
