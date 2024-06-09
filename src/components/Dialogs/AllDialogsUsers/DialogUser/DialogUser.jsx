import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./DialogUser.module.css";

const setActive = ({ isActive }) =>
  isActive ? classes.dialogUserActive : classes.dialogUser;

const Dialog = ({ id, userName }) => {
  let path = "/Dialogs/" + id;
  return (
    <NavLink className={setActive} to={path}>
      {userName}
    </NavLink>
  );
};

export default Dialog;
