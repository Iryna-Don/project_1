import React, { useState } from "react";
import Friend from "./Friend/Friend";
import classes from "./Friends.module.css";
const Friends = ({ allData }) => {
  const [status, setStatus] = useState(true);
  let friendsArray = allData.dialogs.usersDialogsData.filter(
    user => user.friendStatus === status
  );
  let mapFriendsArray = friendsArray.map(({ userId, userName, avatar }) => (
    <Friend key={userId} userName={userName} avatar={avatar}></Friend>
  ));
  return (
    <div>
      <div className={classes.title}>Friends</div>
      <div className={classes.friends}> {mapFriendsArray}</div>
    </div>
  );
};
export default Friends;
