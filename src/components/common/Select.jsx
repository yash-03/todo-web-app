import React from "react";
import PropTypes from "prop-types";

function Select({ options, label, name, value, changeHandler }) {
  return (
    <div className="form-field">
      <label className="field-label">{label}</label>
      <select
        name={name}
        className="field-control"
        value={value}
        onChange={changeHandler}
      >
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
};
Select.defaultProps = {
  value: "",
};
export default Select;
