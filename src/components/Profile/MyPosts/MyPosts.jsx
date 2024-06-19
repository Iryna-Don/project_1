import React, { useState } from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

//allData = state в файле state.js

const MyPosts = ({ store }) => {
  let arrayPosts = store.state.profile.postsData.map(
    ({ postId, userId, textOfPost, likes }) => (
      <Post
        key={postId}
        postId={"#" + postId}
        textOfPost={textOfPost}
        likes={likes}
        avatar={
          store.state.dialogs.usersDialogsData.find(user => userId === user.userId)
            .avatar
        }
      ></Post>
    )
  );

  let textarea = React.createRef();

  const addPostToBLL = () => {
    store.addPost();
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
    store.changePostText(postText);
    };



  return (
    <div>
      <textarea ref={textarea} value={store.state.profile.newPostText} placeholder="Enter New Post" onChange={changeText}/>
      <br />
      <button onClick={addPostToBLL}>Add post</button>
      <button onClick={store.clearTextarea}>Clear all</button>
      <h3>My posts</h3>
      <h3>New posts</h3>
      <div className={classes.posts}>{arrayPosts}</div>
    </div>
  );
};
export default MyPosts;
