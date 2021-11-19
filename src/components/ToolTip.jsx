import React from "react";
import PropTypes from "prop-types";
import "./ToolTip.css";

function ToolTip({ title }) {
  return <span className="tooltiptext">{title}</span>;
}

ToolTip.propTypes = {
  title: PropTypes.string.isRequired,
};
export default ToolTip;
