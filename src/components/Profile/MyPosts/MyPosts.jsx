import React, { useState } from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

//allData = state в файле state.js

const MyPosts = ({ allData, addPost, changePostText, clearTextarea }) => {
  let arrayPosts = allData.profile.postsData.map(
    ({ postId, userId, textOfPost, likes }) => (
      <Post
        key={postId}
        postId={"#" + postId}
        textOfPost={textOfPost}
        likes={likes}
        avatar={
          allData.dialogs.usersDialogsData.find(user => userId === user.userId)
            .avatar
        }
      ></Post>
    )
  );

  let textarea = React.createRef();

  const addPostToBLL = () => {
    addPost();
  };

  // ===============================================================================================================================
  // const [post, setPost] = useState("");
  // const addPostToBLL = () => {
  //   let postMessage = textarea.current.value;
  //   setPost(postMessage);
  //   addPost(postMessage);
  //   textarea.current.value = "";
  // };
  // ===============================================================================================================================


  const changeText = ()=>{
    let postText = textarea.current.value;
    changePostText(postText);
    };



  return (
    <div>
      <textarea ref={textarea} value={allData.profile.newPostText} placeholder="Enter New Post" onChange={changeText}/>
      <br />
      <button onClick={addPostToBLL}>Add post</button>
      <button onClick={clearTextarea}>Clear all</button>
      <h3>My posts</h3>
      <h3>New posts</h3>
      <div className={classes.posts}>{arrayPosts}</div>
    </div>
  );
};
export default MyPosts;
