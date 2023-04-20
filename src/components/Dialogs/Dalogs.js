import { connect } from "react-redux";
import {
  sendMessageCreator,
  updateMessageBodyCreator,
} from "../redux/dialogsReducer";

import DialogItem from "./DialogItem/DalogItem";
import styles from "./Dialogs.module.css";
import Message from "./Message/MessageItem";

const Dialogs = (props) => {

  let state = props.store.getState().messagesPage;
  console.log("1ww", props.store.getState().messagesPage);
  let newMessageBody = state.newMessageBody;
  console.log(state.newMessageBody);
  console.log("state", state);
  /* console.log(props.dialogsReducer);
 
   */
  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    /* setValue(event.target.value); */
    props.store.dispatch(updateMessageBodyCreator(body));
  };
  
  let dialogItems = state.dialogStore.map((item) => (
    <DialogItem key={item.id} id={item.id} name={item.name} />
  ));
  let messagesList = state.messages.map((message) => (
    <Message key={message.id} text={message.text} />
  ));
  console.log("1234", props.messages);
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogItems}</div>
      <div className={styles.messages}>
        {messagesList}
        <div>
          <textarea
            placeholder="Enter message"
            value={newMessageBody}
            onChange={onNewMessageChange}
          ></textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
};
let f1 = () => {
  return {};
};
let f2 = () => {
  return {};
};
const SuperDialogContainer = connect(f1, f2)(Dialogs);
export default Dialogs;
