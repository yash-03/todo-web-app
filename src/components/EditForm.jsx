import React from "react";
import Modal from "./common/modal/Modal";
import TextField from "./common/TextField";
import TextArea from "./common/TextArea";
import Button from "./Button";
import Select from "./common/Select";
import { priorities, status } from "../constants";
import "./EditForm.css";

function EditForm() {
  const submitHandler = () => {
    console.log("test submit");
  };
  return (
    <Modal>
      <div>
        <form onSubmit={submitHandler} className="form">
          <h2>New Task</h2>
          <TextField name="task" label="Task Name" />
          <Select options={priorities} label="Priority" />
          <Select options={status} label="status" />
          <TextArea name="description" label="Description" />
          <Button text="Save" classes="form-button" />
        </form>
      </div>
    </Modal>
  );
}

export default EditForm;
