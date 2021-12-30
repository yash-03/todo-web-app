import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "./common/modal/Modal";
import TextField from "./common/TextField";
import TextArea from "./common/TextArea";
import Button from "./Button";
import Select from "./common/Select";
import { priorities, status } from "../constants";
import "./EditForm.css";

const initialState = {
  description: "",
  priority: "",
  name: "",
  status: "",
};

function EditForm({ open, handleClose }) {
  const [state, setState] = useState(initialState);

  const formStateHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { description, priority, name, status } = state;
    const record = JSON.parse(localStorage.getItem("todo")) ?? [];
    const newRecord = [
      ...record,
      {
        id: record.length + 1,
        description,
        priority,
        name,
        status,
      },
    ];
    setState(initialState);
    localStorage.setItem("todo", JSON.stringify(newRecord));
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
