import React from "react";
import classes from './DialogMessage.module.css';

const DialogMessage =({message})=>{
    return(
    <div className={classes.dialogMessage}>{message}</div>
    )
}
export default DialogMessage;