import { Checkbox, IconButton } from "@material-ui/core";
import React from "react";
import "./EmailRow.css";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import { useDispatch } from "react-redux";
import { openMail } from "./features/emailSlice";

export default function EmailRow({ id, title, description, subject, time }) {
  const dispacth = useDispatch();

  const openEmail = () => {
    dispacth(
      openMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );
  };

  return (
    <div className="email-row" onClick={openEmail}>
      <div className="email-icons-left">
        <Checkbox></Checkbox>
        <IconButton>
          <StarBorderOutlinedIcon></StarBorderOutlinedIcon>
        </IconButton>
      </div>
      <div className="email-row-title">
        <h3>{title}</h3>
      </div>
      <div className="email-text">
        <h4> {subject} -</h4>
        <p> - {description} </p>
      </div>
      <div className="email-right-time">
        <span>{time}</span>
      </div>
    </div>
  );
}
