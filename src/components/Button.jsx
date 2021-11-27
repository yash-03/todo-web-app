import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

function Button(props) {
  const { text, classes, onclick } = props;
  return (
    <button className={`button ${classes}`} onClick={onclick}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default Button;
