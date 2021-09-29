import React from "react";
import "./Mail.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArchiveIcon from "@material-ui/icons/Archive";
import { IconButton } from "@material-ui/core";
import ReportIcon from "@material-ui/icons/Report";
import DeleteIcon from "@material-ui/icons/Delete";
import MarkunreadIcon from "@material-ui/icons/Markunread";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import LabelIcon from "@material-ui/icons/Label";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useHistory } from "react-router";
import MailSection from "./MailSection";
import { useSelector } from "react-redux";
import { selectOpenedMail } from "./features/emailSlice";

export default function Mail() {
  const back = useHistory();
  const selectedMail = useSelector(selectOpenedMail);

  return (
    <div className="mail">
      <div className="mail-icons-row">
        <IconButton onClick={() => back.push("/")}>
          <ArrowBackIcon className="back-arrow"></ArrowBackIcon>
        </IconButton>
        <IconButton>
          <ArchiveIcon></ArchiveIcon>
        </IconButton>
        <IconButton>
          <ReportIcon></ReportIcon>
        </IconButton>
        <IconButton>
          <DeleteIcon></DeleteIcon>
        </IconButton>
        <IconButton>
          <MarkunreadIcon></MarkunreadIcon>
        </IconButton>
        <IconButton>
          <WatchLaterIcon></WatchLaterIcon>
        </IconButton>
        <IconButton>
          <LabelIcon></LabelIcon>
        </IconButton>
        <IconButton>
          <MoreVertIcon></MoreVertIcon>
        </IconButton>
      </div>
      <div className="mail-message">
        <MailSection
          title={selectedMail?.title}
          subject={selectedMail.subject}
          time={selectedMail.time}
          message={selectedMail.description}
        ></MailSection>
      </div>
    </div>
  );
}
