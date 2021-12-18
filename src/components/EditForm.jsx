import React from "react";
import PropTypes from "prop-types";
import Modal from "./common/modal/Modal";
import TextField from "./common/TextField";
import TextArea from "./common/TextArea";
import Button from "./Button";
import Select from "./common/Select";
import { priorities, status } from "../constants";
import "./EditForm.css";

function EditForm({ open, handleClose }) {
  const submitHandler = (e) => {
    e.preventDefault();
    const { description, priority, task, status } = e.target.elements;
  };
  return (
    <Modal open={open} handleClose={handleClose}>
      <div>
        <form onSubmit={submitHandler} className="form">
          <h2>New Task</h2>
          <TextField name="task" label="Task Name" />
          <Select options={priorities} name="priority" label="Priority" />
          <Select options={status} name="status" label="status" />
          <TextArea name="description" label="Description" />
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
