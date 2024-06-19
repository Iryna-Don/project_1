import React from "react";
import classes from "./AllDialogsUsers.module.css";
import DialogUser from "./DialogUser/DialogUser";

const allDialogsUsers = ({ store }) => {
  let arrayUsersDialogsData = store.state.dialogs.usersDialogsData.map(({ userId, userName, avatar }) => (
    <DialogUser key={userId} id={userId} userName={userName} avatar={avatar} />
  ));

  return <div className={classes.allDialogsUsers}>{arrayUsersDialogsData}</div>;
};

export default allDialogsUsers;
