import React from "react";
import "./Login.css";
import logo from "./images/logo.webp";
import { useDispatch } from "react-redux";
import { auth, provider } from "./firebase";
import { login } from "./features/user.Slice";

export default function Login() {
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <div className="login-section">
        <img src={logo} alt="" />
        <button className="login-btn" onClick={signIn}>
          Login
        </button>
      </div>
    </div>
  );
}
