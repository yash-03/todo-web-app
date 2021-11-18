import React from "react";
import Button from "./Button";
import "./Action.css";

function Action() {
  return (
    <div className="Action">
      <Button text="👁" classes="view" />
      <Button text="🖌" classes="edit" />
      <Button text="🗑" classes="delete" />
    </div>
  );
}

export default Action;
