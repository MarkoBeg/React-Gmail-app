import React from "react";
import "./MailSection.css";
import DoneAllIcon from "@material-ui/icons/DoneAll";

export default function MailSection({ subject, title, message, time }) {
  return (
    <div className="mail-section">
      <div className="mailsection-body">
        <h2>{subject}</h2>
        <DoneAllIcon style={{ color: "gold" }}></DoneAllIcon>
        <p>{title}</p>
        <p>{time}</p>
      </div>
      <div className="message">{message}</div>
    </div>
  );
}
