// import React, { useState } from "react";
import React from "react";
import classes from "./AllDialogsMessages.module.css";
import DialogMessage from "./DialogMessage/DialogMessage";

const AllDialogsMessages = ({ allData, addDialogMessage, changeDialogMessage, clearDialogTextarea }) => {
  let arrayMessagesDialogData = allData.dialogs.messageDialogsData.map(
    (message, index) => {
      // =================================================================================================
      // функция проверяет, повторяется ли userId у соседних сообщений, если да, возвращает true, если нет - false;
      // далее значение передается через props в DialogMessage для отрисовки (repeat, dataStyles). При получении true, стиль не меняется, если false =
      // меняется на противоположное.
      // =================================================================================================
      function repeatOrNot(ind) {
        for (
          let i = ind;
          i <= allData.dialogs.messageDialogsData.length - 1;
          i++
        ) {
          if (i > 0) {
            return allData.dialogs.messageDialogsData[i].userId ===
              allData.dialogs.messageDialogsData[i - 1].userId
              ? true
              : false;
          } else if (i === 0) {
            return allData.dialogs.messageDialogsData[i].userId ===
              allData.dialogs.messageDialogsData[i + 1].userId
              ? true
              : false;
          }
        }
      }

      return (
        <DialogMessage
          key={message.id}
          message={message.message}
          avatar={
            allData.dialogs.usersDialogsData.find(
              user => message.userId === user.userId
            ).avatar
          }
          repeat={repeatOrNot(index)}
        />
      );
    }
  );

  let textarea = React.createRef();
  // const [text, setText] = useState("");
  // const addMessage = ()=>setText(textarea.current.value);
  // const clearTextarea = ()=> textarea.current.value = '';

  const changeMessage = ()=>{
    let postDialogMessage = textarea.current.value;
    changeDialogMessage(postDialogMessage);
    };

  return (
    <>
      <div className={classes.allDialogsMessages}>
        {arrayMessagesDialogData}
        <textarea ref={textarea} onChange={changeMessage} value={allData.dialogs.newDialogMessage} placeholder="Add A Message"></textarea>
        <button onClick={addDialogMessage}>Add message</button>
        <button onClick={clearDialogTextarea}>Clear</button>

      </div>
    </>
  );
};
export default AllDialogsMessages;
