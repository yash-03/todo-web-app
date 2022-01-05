import React from "react";
import "./Filter.css";

function Filter() {
  return (
    <div className="filter">
      <label>Task:</label>
      <select className="select-box">
        <option value="">Select Options...</option>
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="delete">Delete</option>
      </select>
    </div>
  );
}

export default Filter;
