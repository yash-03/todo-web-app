import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

function Button(props) {
  const { text, classes } = props;
  return <button className={`button ${classes}`}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default Button;
