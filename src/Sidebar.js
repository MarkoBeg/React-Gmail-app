import { Button } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SidebarStuff from "./SidebarStuff";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SendIcon from "@material-ui/icons/Send";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ListIcon from "@material-ui/icons/List";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import VideocamIcon from "@material-ui/icons/Videocam";
import { openSendMessage } from "./features/emailSlice";
import { useDispatch } from "react-redux";

export default function Sidebar() {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <div className="sidebar-compose">
        <Button
          startIcon={<AddIcon></AddIcon>}
          className="sidebar-btn"
          onClick={() => dispatch(openSendMessage())}
        >
          Compose
        </Button>
      </div>
      <SidebarStuff
        Icon={InboxIcon}
        title="Inobx"
        number="20"
        newColor="tomato"
        selected="true"
      ></SidebarStuff>
      <SidebarStuff
        Icon={StarIcon}
        title="Starred"
        number="15"
        newColor="gray"
        selected="false"
      ></SidebarStuff>
      <SidebarStuff
        Icon={AccessTimeIcon}
        title="Inobx"
        number="11"
        newColor="gray"
        selected="false"
      ></SidebarStuff>
      <SidebarStuff
        Icon={SendIcon}
        title="Inobx"
        number="26"
        newColor="gray"
        selected="false"
      ></SidebarStuff>
      <SidebarStuff
        Icon={InsertDriveFileIcon}
        title="Inobx"
        number="7"
        newColor="gray"
        selected="false"
      ></SidebarStuff>
      <SidebarStuff
        Icon={ListIcon}
        title="List"
        number="16"
        newColor="gray"
        selected="false"
      ></SidebarStuff>
      <SidebarStuff
        Icon={ExpandMoreIcon}
        title="More"
        newColor="gray"
        selected="false"
      ></SidebarStuff>
      <div className="sidebar-bottom">
        <h3>Meet</h3>
        <div className="sidebar-bottom-meet">
          <IconButton>
            <MeetingRoomIcon></MeetingRoomIcon>
          </IconButton>
          <p>Join meeting</p>
        </div>
        <div className="sidebar-bottom-meet">
          <IconButton>
            <VideocamIcon></VideocamIcon>
          </IconButton>
          <p>New meeting</p>
        </div>
      </div>
    </div>
  );
}
