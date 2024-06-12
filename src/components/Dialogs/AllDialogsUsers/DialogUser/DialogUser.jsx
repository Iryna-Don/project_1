import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./DialogUser.module.css";

const setActive = ({ isActive }) =>
  isActive ? classes.dialogUserActive : classes.dialogUser;

const DialogUser = ({ id, userName, avatar }) => {
  let path = "/Dialogs/" + id;
  return (<div>
     <NavLink className={setActive} to={path}>
     <img src={avatar} className={classes.userAvatar}/>
      {userName}
    </NavLink>
    </div>
  );
};

export default DialogUser;
