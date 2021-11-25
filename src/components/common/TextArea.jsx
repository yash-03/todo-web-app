import React from "react";
import PropTypes from "prop-types";
import "./TextField.css";

function TextArea({ label, type, name }) {
  return (
    <div class="form-field">
      <label className="field-label">{label}</label>
      <textarea type="text" name={name} className="field-control text-field" />
    </div>
  );
}

TextArea.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
TextArea.defaultProps = {
  type: "text",
};
export default TextArea;
