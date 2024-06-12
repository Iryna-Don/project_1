import React from "react";
import classes from "./Dialogs.module.css";
import AllDialogsUsers from "./AllDialogsUsers/AllDialogsUsers";
import AllDialogsMessages from "./AllDialogsMessages/AllDialogsMessages";

const Dialogs = ({ allData }) => {
  return (
    <>
      <div className={classes.dialogs}>
        <AllDialogsUsers allData={allData} />
        <AllDialogsMessages allData={allData} />
      </div>
    </>
  );
};
export default Dialogs;
