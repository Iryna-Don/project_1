import React from "react";
import classes from "./Post.module.css";
import Button from "../../../Button/Button";

const Post = ({ postId, textOfPost, likes, avatar }) => {
  return (
    <div className={classes.itemPost}>
      <img className={classes.userAvatar} src={avatar} alt='some description' />
      {postId} {textOfPost}
      <br />
      <Button title={"Like " + likes}></Button>
      <Button title='Dislike'></Button>
      <Button title='Comment'></Button>
      <hr />
    </div>
  );
};
export default Post;

// =================================================
// import React, {useState} from "react";
// для увеличения количества лайков (безконечно), нужно вводить ограничение на 1 лайк,
// возможно, нужен какой-то счетчик, если инишалЛайк=плюсЛайк+1, деактивировать кнопку
// const initialLike = +likes;
// let[plusLike, setPlusLike]=useState(initialLike);
// <button onClick={()=>setPlusLike(++plusLike)}>Like {plusLike}</button>
