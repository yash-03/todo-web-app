import React from "react";
import PropTypes from "prop-types";

function Select({ options, label, name, value }) {
  return (
    <div class="form-field">
      <label className="field-label">{label}</label>
      <select name={name} className="field-control" value={value}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
export default Select;
