import React from "react";
import "./App.css";
import EmailBody from "./EmailBody";
import Header from "./Header";
import HeaderBottom from "./HeaderBottom";
import Sidebar from "./Sidebar";
import Mail from "./Mail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RightSidebar from "./RightSidebar";
import SendMail from "./SendMail";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/emailSlice";
import Login from "./Login";
import { selectUser } from "./features/user.Slice";
import { login } from "./features/user.Slice";
import { useEffect } from "react";
import { auth } from "./firebase";

function App() {
  const sendMessage = useSelector(selectSendMessageIsOpen);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      }
    });
  }, []);

  return (
    <Router>
      {!user ? (
        <Login></Login>
      ) : (
        <div className="App">
          <Header></Header>
          <HeaderBottom></HeaderBottom>

          <div className="app-body">
            <Sidebar></Sidebar>

            <Switch>
              <Route path="/mail">
                <Mail></Mail>
              </Route>
              <Route path="/">
                <EmailBody></EmailBody>
              </Route>
            </Switch>

            <RightSidebar></RightSidebar>

            {/*mail*/}
          </div>
          {sendMessage && <SendMail></SendMail>}
        </div>
      )}
    </Router>
  );
}

export default App;
