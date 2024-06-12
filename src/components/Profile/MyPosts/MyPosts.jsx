import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import Button from "../../Button/Button";

//allData = state в файле state.js

const MyPosts = ({ allData }) => {
  let arrayPosts = allData.profile.postsData.map(
    ({ postId, userId, textOfPost, likes }) => (
      <Post
        key={postId}
        postId={"#" + postId}
        textOfPost={textOfPost}
        likes={likes}
        avatar={
          allData.dialogs.usersDialogsData.find(
            user => userId === user.userId
          ).avatar
        }
      ></Post>
    )
  );

  return (
    <div>
      <textarea></textarea>
      <br />
      <Button title={"Add post"}></Button>
      <Button title={"Clear all"}></Button>
      <h3>My posts</h3>
      <h3>New posts</h3>
      <div className={classes.posts}>{arrayPosts}</div>
    </div>
  );
};
export default MyPosts;
