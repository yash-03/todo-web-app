import React, { useEffect } from "react";
import Button from "./components/Button";
import Filter from "./components/Filter";
import "./App.css";

function App() {
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
    </div>
  );
}

export default App;
