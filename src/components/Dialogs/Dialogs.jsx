import React from "react";
import classes from "./Dialogs.module.css";
import AllDialogsUsers from "./AllDialogsUsers/AllDialogsUsers";
import AllDialogsMessages from "./AllDialogsMessages/AllDialogsMessages";

const Dialogs = ({ allData, changeDialogMessage, clearDialogTextarea, addDialogMessage }) => {
  return (
    <>
      <div className={classes.dialogs}>
        <AllDialogsUsers allData={allData} />
        <AllDialogsMessages allData={allData} addDialogMessage={addDialogMessage} changeDialogMessage={changeDialogMessage} clearDialogTextarea={clearDialogTextarea} />
      </div>
    </>
  );
};
export default Dialogs;
