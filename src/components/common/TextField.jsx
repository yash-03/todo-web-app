import React from "react";
import PropTypes from "prop-types";
import "./TextField.css";

function TextField({ label, type, name }) {
  return (
    <div className="form-field">
      <label className="field-label">{label}</label>
      <input type={type} name={name} className="field-control" />
    </div>
  );
}

TextField.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
TextField.defaultProps = {
  type: "text",
};
export default TextField;
