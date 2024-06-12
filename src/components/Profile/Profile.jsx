import React from "react";
// import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({allData}) => {
  return (
    <>
      <ProfileInfo />
      <MyPosts allData={allData} />
    </>
  );
};
export default Profile;
