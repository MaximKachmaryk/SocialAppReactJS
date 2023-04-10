import DialogItem from "./DialogItem/DalogItem";
import styles from "./Dialogs.module.css";
import Message from "./Message/MessageItem";

const Dialogs = (props) => {
 
  let messages = props.messages;
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {props.dialogStore.map((item) => (
          <DialogItem key={item.id} id={item.id} name={item.name} />
        ))}
      </div>
      <div className={styles.messages}>
        {messages.map((message) => (
          <Message key={message.id} icon={message.icon} text={message.text} />
        ))}
      </div>
    </div>
  );
};

export default Dialogs;
