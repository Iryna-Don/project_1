import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import Button from "../../Button/Button";

const MyPosts = () => {
  return (
    <div>
      <textarea></textarea>
      <br />
      <Button title={'Add post'}></Button>
      <Button title={'Clear all'}></Button>
      <h3> My posts</h3>
      <h3>New posts</h3>
      <div className={classes.posts}>
        <Post post='post_1' likes='4'></Post>
        <Post post='post_2' likes='22'></Post>
        <Post post='post_3' likes='890'></Post>
        <Post post='post_4' likes='12'></Post>
        <Post post='post_5' likes='28'></Post>
      </div>
    </div>
  );
};
export default MyPosts;
