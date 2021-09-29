import React from "react";
import "./Header.css";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "./images/logo.webp";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import AppsIcon from "@material-ui/icons/Apps";
import SettingsIcon from "@material-ui/icons/Settings";
import { Avatar } from "@material-ui/core";
import Me from "./images/avatar.jpg";
import { useDispatch } from "react-redux";
import { logout, selectUser } from "./features/user.Slice";
import { useSelector } from "react-redux";
import { auth } from "./firebase";

export default function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div className="header">
      <div className="header-logo">
        <IconButton>
          <MenuIcon className="header-menu"></MenuIcon>
        </IconButton>
        <img src={logo} alt="logoImg" />
      </div>
      <div className="header-search">
        <IconButton className="header-search-icon">
          <SearchIcon className="search-icon"></SearchIcon>
        </IconButton>
        <input type="text" placeholder="Search mail" />
      </div>
      <div className="right-header">
        <IconButton>
          <HelpOutlineOutlinedIcon></HelpOutlineOutlinedIcon>
        </IconButton>
        <IconButton>
          <SettingsIcon></SettingsIcon>
        </IconButton>
        <IconButton>
          <AppsIcon></AppsIcon>
        </IconButton>

        <Avatar className="avatar-me" onClick={logOut}>
          <img src={user?.photoUrl} alt="avatar" />
        </Avatar>
      </div>
    </div>
  );
}
