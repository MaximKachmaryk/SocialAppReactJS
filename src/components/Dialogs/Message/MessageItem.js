import React from "react";
import styles from "./../Dialogs.module.css";

const Message = (props) => {
  let newtextInMessage = React.createRef();
  let onAddMessage = () => {
    let text = newtextInMessage.current.value;
    return alert(text);
  };
  return (
    <div className={styles.message}>
      {props.icon}
      {props.text}
      <textarea ref ={newtextInMessage}></textarea>
      <button onClick={onAddMessage} >addtext</button>
    </div>
  );
};

export default Message;
