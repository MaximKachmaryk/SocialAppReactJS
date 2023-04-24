import { connect } from "react-redux";
import {
  sendMessageCreator,
  updateMessageBodyCreator,
} from "../redux/dialogsReducer";

import DialogItem from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import Message from "./Message/MessageItem";

const Dialogs = (props) => {

  let newMessageBody = props.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateMessageBody(body);
  };
  
  let dialogItems = props.dialogs.map((item) => (
    <DialogItem key={item.id} id={item.id} name={item.name} />
  ));

  let messagesList = props.messages.map((message) => (
    <Message key={message.id} text={message.text} />
  ));

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

const mapStateToProps = (state) => {
  return {
    dialogs: state.messagesPage.dialogStore,
    messages: state.messagesPage.messages,
    newMessageBody: state.messagesPage.newMessageBody
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
    updateMessageBody: (body) => {
      dispatch(updateMessageBodyCreator(body));
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
