import React from "react";
import classes from "./AllDialogsMessages.module.css";
import DialogMessage from "./DialogMessage/DialogMessage";

const AllDialogsMessages = () => {
  return (
    <div className={classes.allDialogsMessages}>
      <DialogMessage message='Hi!' />
      <DialogMessage message='How are you?' />
      <DialogMessage message='Not so good' />
      <DialogMessage message='And?' />
    </div>
  );
};
export default AllDialogsMessages;
