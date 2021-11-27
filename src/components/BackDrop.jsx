import React from "react";
import PropTypes from "prop-types";

import "./BackDrop.css";

function BackDrop({ children, open, handleBackdrop }) {
  return (
    <div className={`${open ? "BackDrop" : "d-none"}`}>
      <div className="BackDrop" onClick={handleBackdrop} />
      {children}
    </div>
  );
}

BackDrop.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool,
  handleBackdrop: PropTypes.func.isRequired,
};
BackDrop.defaultProps = {
  open: false,
};
export default BackDrop;
