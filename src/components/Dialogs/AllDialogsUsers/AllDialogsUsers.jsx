import React from "react";
import classes from "./AllDialogsUsers.module.css";
import Dialog from "./DialogUser/DialogUser";
const allDialogsUsers = () => {
  return (
    <div className={classes.allDialogsUsers}>
      <Dialog id='1' userName='Iryna' />
      <Dialog id='2' userName='Ihor' />
      <Dialog id='3' userName='Mykchailo' />
      <Dialog id='4' userName='Vira' />
      <Dialog id='5' userName='Lisa' />
      <Dialog id='6' userName='Galyna' />
    </div>
  );
};

export default allDialogsUsers;
