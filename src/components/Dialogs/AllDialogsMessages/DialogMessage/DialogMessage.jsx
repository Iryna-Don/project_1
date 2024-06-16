import React from "react";
import classes from "./DialogMessage.module.css";

// =================================================================================================
// формирую массив с 2-мя стилями отрисовки сообщений (вынесен в state.js), через props получаю данные (dataStyles), поменялся ли userId.
// При изменении отрисовую с др.стороны, методом переворота данных в массиве .reverse().
// Этот метод изменяет сам массив данных, поэтому удерживает предыдущее использованное значение на случай повторнения userId.
// const stylesFormats = [classes.firstFormat, classes.secondFormat];
// =================================================================================================
let stylesFormats = [classes.firstFormat, classes.secondFormat];

const DialogMessage = ({ message, avatar, repeat }) => {
  function reverseStylesFormats(array) {
    return array.reverse();
  }

  return (
    <>
      <div
        className={
          repeat ? stylesFormats[0] : reverseStylesFormats(stylesFormats)[0]
        }
      >
        <img className={classes.userAvatar} src={avatar} alt='description' />
        <i>{message}</i>
      </div>
    </>
  );
};

export default DialogMessage;
