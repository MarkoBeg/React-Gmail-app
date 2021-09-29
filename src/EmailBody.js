import React from "react";
import "./EmailBody.css";
import EmailBox from "./EmailBox";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import EmailRow from "./EmailRow";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import { db } from "./firebase";
import { useDispatch } from "react-redux";

export default function EmailBody() {
  const mail = useHistory();
  

  const [emails, setEmail] = useState([]);

  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setEmail(
          snapshot.docs.map((item) => ({
            id: item.id,
            data: item.data(),
          }))
        );
      });
  }, []);

  return (
    <div className="email-body">
      <div className="email-box-row">
        <EmailBox
          Icon={InboxIcon}
          title="Primary"
          selected="true"
          color="lightcoral"
        ></EmailBox>
        <EmailBox Icon={PeopleIcon} title="Social" color="#1a73e8"></EmailBox>
        <EmailBox
          Icon={LocalOfferIcon}
          title="Promotions"
          color="#188038"
        ></EmailBox>
      </div>
      <div className="email-row-body " onClick={() => mail.push("/mail")}>
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => {
          return (
            <EmailRow
              id={id}
              key={id}
              title={to}
              description={message}
              subject={subject}
              time={new Date(timestamp?.seconds * 1000).toUTCString()}
            ></EmailRow>
          );
        })}
        <EmailRow
          id=""
          title="Google"
          subject="This is a test"
          description="Change test"
          time="4am"
        ></EmailRow>
        <EmailRow
          id=""
          title="Google"
          subject="This is a test"
          description="Change test"
          time="4am"
        ></EmailRow>
        <EmailRow
          id=""
          title="Google"
          subject="This is a test"
          description="Change test"
          time="4am"
        ></EmailRow>
      </div>
    </div>
  );
}
