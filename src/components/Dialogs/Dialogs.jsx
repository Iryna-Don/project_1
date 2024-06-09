import React from "react";
import classes from "./Dialogs.module.css";
import AllDialogsUsers from "./AllDialogsUsers/AllDialogsUsers";
import AllDialogsMessages from "./AllDialogsMessages/AllDialogsMessages";

const Dialogs = (props) => {
  return (
    <>
      <div className={classes.dialogs}>
        <AllDialogsUsers/>
        <AllDialogsMessages/>
      </div>
    </>
  );
};
export default Dialogs;
