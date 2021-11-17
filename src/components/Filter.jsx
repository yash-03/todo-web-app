import React from "react";
import "./Filter.css";

function Filter() {
  return (
    <div className="filter">
      <label>Task:</label>
      <select className="select-box">
        <option value="">Select Options...</option>
        <option value="1">All</option>
        <option value="2">Done</option>
        <option value="3">Delete</option>
      </select>
    </div>
  );
}

export default Filter;
