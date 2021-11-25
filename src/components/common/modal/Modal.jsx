import React from "react";
import PropTypes from "prop-types";
import BackDrop from "../../BackDrop";
import "./Modal.css";

function Modal({ children }) {
  return (
    <BackDrop>
      <div className="modal">{children}</div>
    </BackDrop>
  );
}

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
};

export default Modal;
