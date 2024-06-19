import React from "react";
import classes from "./Dialogs.module.css";
import AllDialogsUsers from "./AllDialogsUsers/AllDialogsUsers";
import AllDialogsMessages from "./AllDialogsMessages/AllDialogsMessages";

const Dialogs = ({ store }) => {
  return (
    <>
      <div className={classes.dialogs}>
        <AllDialogsUsers store={store} />
        <AllDialogsMessages store={store} />
      </div>
    </>
  );
};
export default Dialogs;
