import React from "react";
import "./EmailBox.css";

export default function EmailBox({ Icon, title, selected, color }) {
  return (
    <div
      className={`email-box ${selected && "email-box-active"}`}
      style={{ borderBottom: `3px solid ${color}` }}
    >
      {Icon && <Icon style={{ color: color }}></Icon>}
      <h4 style={{ color: color }}>{title}</h4>
    </div>
  );
}
