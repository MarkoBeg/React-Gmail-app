import React from "react";
import "./RightSidebar.css";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";

export default function RightSidebar() {
  const rightSide = (title, text) => {
    return (
      <div className="rightsidebar-item">
        <h2>{title}</h2>
        <h4>{text}</h4>
      </div>
    );
  };
  return (
    <div className="rightsidebar">
      <div className="items">
        <CalendarTodayIcon style={{ color: "#1a73e8" }}></CalendarTodayIcon>
        {rightSide("Calendar", "Check date")}
      </div>
      <div className="items">
        <EmojiObjectsIcon style={{ color: "yellow" }}></EmojiObjectsIcon>
        {rightSide("New ideas", "Keep you up to date")}
      </div>
      <div className="items">
        <AssignmentTurnedInIcon
          style={{ color: "#1a73e8" }}
        ></AssignmentTurnedInIcon>
        {rightSide("Task", "Check your task")}
      </div>
      <div className="items">
        <ContactSupportIcon style={{ color: "#1a73e8" }}></ContactSupportIcon>
        {rightSide("Support", "Contact us")}
      </div>
    </div>
  );
}
