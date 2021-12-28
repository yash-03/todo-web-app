import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

function Button(props) {
  const { text, classes, onclick, type } = props;
  return (
    <button className={`button ${classes}`} onClick={onclick} type={type}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  classes: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  type: "button",
};

export default Button;
