import React from "react";
import classes from "./AllDialogsMessages.module.css";
import DialogMessage from "./DialogMessage/DialogMessage";

const AllDialogsMessages = ({ allData }) => {
  let arrayMessagesDialogData = allData.dialogs.messageDialogsData.map(
    (message, index) => {
      // функция проверяет, повторяется ли userId у соседних сообщений, если да, возвращает true, если нет - false; 
      // далее значение передается через props в DialogMessage для отрисовки. При получении true, стиль не меняется, если false = 
      // меняется на противоположное.
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

  return (
    <div className={classes.allDialogsMessages}>{arrayMessagesDialogData}</div>
  );
};
export default AllDialogsMessages;
