import React from "react";
// import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({allData, addPost, changePostText, clearTextarea}) => {
  return (
    <>
      <ProfileInfo />
      <MyPosts allData={allData} addPost={addPost} changePostText={changePostText} clearTextarea={clearTextarea}/>
    </>
  );
};
export default Profile;
