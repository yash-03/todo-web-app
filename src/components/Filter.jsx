import React from "react";
import { status } from "../constants.js";
import "./Filter.css";

function Filter({ handleFilter }) {
  return (
    <div className="filter">
      <label>Task:</label>
      <select
        className="select-box"
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="">Select filter</option>
        {status.map((s) => (
          <option value={s.value} key={s.value}>
            {s.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
