import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <>
      <div>
        <img
          className={classes.posterImg}
          src='https://media.istockphoto.com/id/1569238758/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BB%D0%B5%D1%82%D0%BD%D0%B8%D0%B9-%D1%84%D0%BE%D0%BD.jpg?s=612x612&w=0&k=20&c=tGamu3d79V6a2X4OMJDy3EdAShv4fRtenOj583XmGu8='
          alt='shadow of a palm leaf on the water of the azure ocean'
        />
      </div>
      <div>
        <img
          className={classes.userAvatar}
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCnixZ5tf8EcJ1alrDc67ATX7tyY87zrBsBw&s'
          alt='face of a red cat with glasses'
        />
        <br />
        Avatar+description
      </div>
    </>
  );
};

export default ProfileInfo;
