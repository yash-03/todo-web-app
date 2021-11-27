import React from "react";
import PropTypes from "prop-types";
import BackDrop from "../../BackDrop";
import "./Modal.css";

function Modal({ children, open, handleClose }) {
  return (
    <BackDrop open={open} handleBackdrop={handleClose}>
      <div className="modal">{children}</div>
    </BackDrop>
  );
}

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Modal;
