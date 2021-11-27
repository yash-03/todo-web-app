import React from "react";
import "./Table.css";

function Table(props) {
  const { data } = props;
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            (data ?? []).map((el) => (
              <tr key={el.id}>
                <td>{el.task}</td>
                <td>{el.status}</td>
                <td>{el.action}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No Record Found!</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
