import React from "react";
import PropTypes from "prop-types";
import Modal from "./common/modal/Modal";
import Button from "./common/Button";
import { priorities, status as statusList } from "../constants";
import "./ViewTodo.css";

function ViewTodo({ open, handleClose, selectedTodo }) {
  const { name, priority: pkey, status: sKey, description } = selectedTodo;

  const priority = priorities.find((p) => p.value === pkey);
  const status = statusList.find((s) => s.value === sKey);

  return (
    <Modal open={open} handleClose={handleClose}>
      <div className="todo-view">
        <h2>Todo Task</h2>
        <div className="todo-item">
          <label>Name:</label>
          <p>{name}</p>
        </div>
        <div className="todo-item">
          <label>Priority:</label>
          <p>{priority?.label}</p>
        </div>
        <div className="todo-item">
          <label>Status:</label>
          <p>{status?.label}</p>
        </div>
        <div className="todo-item">
          <label>Description:</label>
          <p>{description}</p>
        </div>
        <Button text="Close" classes="close-btn" onclick={handleClose} />
      </div>
    </Modal>
  );
}

ViewTodo.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ViewTodo;
