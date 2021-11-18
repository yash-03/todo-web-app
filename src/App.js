import React, { useEffect } from "react";
import Button from "./components/Button";
import Filter from "./components/Filter";
import Table from "./components/Table/Table";
import Action from "./components/Action";
import "./App.css";

function App() {
  const statusList = [
    { id: 1, title: "Pending", color: "orange" },
    { id: 2, title: "Todo", color: "yellow" },
    { id: 3, title: "Delete", color: "red" },
    { id: 4, title: "Working", color: "green" },
  ];

  const record = [
    {
      id: 1,
      task: "first",
      status: 1,
    },
    {
      id: 2,
      task: "second",
      status: 3,
    },
    {
      id: 3,
      task: "third",
      status: 4,
    },
  ];

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

  useEffect(() => {
    document.title = "Todo List";
  });

  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo List</h2>
        <div className="todo-list-controller">
          <Button text="+" />
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
