import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import Filter from "./components/Filter";
import Table from "./components/Table/Table";
import Action from "./components/Action";
import { statusList, record } from "./constants.js";
import EditForm from "./components/EditForm";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);
  const todoTaskList = () => {
    return record.map((task) => {
      const { title, color } = statusList.find((el) => el.id === task.status);
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
  useEffect(() => {
    document.title = "Todo List";
  });

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
