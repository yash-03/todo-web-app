import React from "react";
import PropTypes from "prop-types";
import Modal from "./common/modal/Modal";
import Button from "./common/Button";
import "./ConfirmModel.css";

function ConfirmModel({ open, handleClose, handleConfirm, message, title }) {
  return (
    <Modal open={open} handleClose={handleClose}>
      <div className="confirm-model">
        <h4>{title}</h4>
        <p>{message}</p>
        <div className="buttons">
          <Button text="Close" onclick={handleClose} />
          <Button text="Confirm" onclick={handleConfirm} />
        </div>
      </div>
    </Modal>
  );
}

ConfirmModel.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ConfirmModel;
