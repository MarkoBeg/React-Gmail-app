import React from "react";
import "./SendMail.css";
import { useForm } from "react-hook-form";
import CloseIcon from "@material-ui/icons/Close";
import firebase from "firebase";
import { db } from "./firebase";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/emailSlice";

export default function SendMail() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    db.collection("emails").add({
      to: data.to,
      subject: data.subject,
      message: data.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessage());
  };

  return (
    <div className="sendmail">
      <div className="sendmail-header">
        <h2>New Message</h2>
        <CloseIcon
          className="close-btn"
          onClick={() => dispatch(closeSendMessage())}
        ></CloseIcon>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          type="email"
          placeholder="To"
          {...register("to", { required: true })}
        />
        {errors.to === "required" && (
          <p className="sendmail-erorr">To is required</p>
        )}
        <input
          name="subject"
          type="text"
          placeholder="Subject"
          {...register("subject", { required: true })}
        />
        {errors.to === "required" && (
          <p className="sendmail-erorr">Subject is required</p>
        )}
        <input
          className="msg"
          name="message"
          type="text"
          placeholder="Message"
          {...register("message", { required: true })}
        />
        {errors.to === "required" && (
          <p className="sendmail-erorr">Message is required</p>
        )}
        <div className="sendmail-btn">
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}
