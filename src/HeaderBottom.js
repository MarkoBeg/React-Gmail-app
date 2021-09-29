import { IconButton, Checkbox } from "@material-ui/core";
import React from "react";
import "./HeaderBottom.css";
import RefreshIcon from "@material-ui/icons/Refresh";
import MoreVertIcon from "@material-ui/icons/MoreVert";

export default function HeaderBottom() {
  return (
    <div className="header-bottom">
      <Checkbox></Checkbox>
      <IconButton>
        <RefreshIcon></RefreshIcon>
      </IconButton>
      <IconButton>
        <MoreVertIcon></MoreVertIcon>
      </IconButton>
    </div>
  );
}
