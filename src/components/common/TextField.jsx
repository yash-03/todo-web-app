import React from "react";
import PropTypes from "prop-types";
import "./TextField.css";

function TextField({ label, type, name }) {
  return (
    <div class="form-field">
      <label className="field-label">{label}</label>
      <input type="text" name={name} className="field-control text-field" />
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
