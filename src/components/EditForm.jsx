import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Modal from "./common/modal/Modal";
import TextField from "./common/TextField";
import TextArea from "./common/TextArea";
import Button from "./Button";
import Select from "./common/Select";
import { priorities, status } from "../constants";
import "./EditForm.css";

const defaultValue = {
  description: "",
  priority: "",
  name: "",
  status: "",
};

function EditForm({ open, handleClose, operation, selectedTodo }) {
  const { type } = operation;
  const record = JSON.parse(localStorage.getItem("todo")) ?? [];
  const [state, setState] = useState(defaultValue);

  useEffect(() => {
    const initialState = type === "add" ? defaultValue : selectedTodo;
    setState(initialState);
  }, [type, selectedTodo]);

  const formStateHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let newRecord = [];
    const { description, priority, name, status, id } = state;
    if (id && operation.type === "edit") {
      const todos = [...record];
      const oldTodoIndex = todos.findIndex((todo) => todo.id === id);
      const oldTodo = { ...todos[oldTodoIndex] };
      todos[oldTodoIndex] = {
        ...oldTodo,
        description,
        priority,
        name,
        status,
      };
      newRecord = todos;
    } else {
      const newTodo = {
        id: record.length + 1,
        description,
        priority,
        name,
        status,
      };

      newRecord = [...record, newTodo];
    }
    localStorage.setItem("todo", JSON.stringify(newRecord));
    setState(defaultValue);
    handleClose();
  };
  return (
    <Modal open={open} handleClose={handleClose}>
      <div>
        <form onSubmit={submitHandler} className="form">
          <h2>New Task</h2>
          <TextField
            name="name"
            label="Task Name"
            value={state.name}
            onChange={formStateHandler}
          />
          <Select
            options={priorities}
            value={state.priority}
            name="priority"
            label="Priority"
            onChange={formStateHandler}
          />
          <Select
            options={status}
            value={state.status}
            name="status"
            label="status"
            onChange={formStateHandler}
          />
          <TextArea
            name="description"
            value={state.description}
            label="Description"
            onChange={formStateHandler}
          />
          <Button text="Save" type="submit" classes="form-button" />
        </form>
      </div>
    </Modal>
  );
}

EditForm.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default EditForm;
