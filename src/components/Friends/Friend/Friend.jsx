import React from "react";
import classes from "./Friend.module.css";

const Friend = ({ userName, avatar }) => {
  return (
    <div className={classes.wrap}>
      <img src={avatar} className={classes.avatar} />
      <span className={classes.spanUserName}>{userName}</span>
    </div>
  );
};
export default Friend;
