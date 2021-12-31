import React from "react";
import PropTypes from "prop-types";
import "./TextField.css";

function TextArea({ label, name, value, onChange }) {
  return (
    <div className="form-field">
      <label className="field-label">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className="field-control"
      />
    </div>
  );
}

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default TextArea;
