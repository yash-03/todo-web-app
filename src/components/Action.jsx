import React from "react";
import Button from "./common/Button";
import ToolTip from "./ToolTip";
import { actions } from "../constants";
import "./Action.css";

function Action({ id, actionHandler }) {
  return (
    <div className="Action">
      {actions.map((action) => (
        <div className="tooltip" key={action.text}>
          <Button
            text={action.icon}
            classes={action.classes}
            onclick={() => actionHandler(id, action.title)}
          />
          <ToolTip title={action.title} />
        </div>
      ))}
    </div>
  );
}

export default Action;
