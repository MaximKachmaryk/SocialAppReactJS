const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  
  messages: [
    { id: 1, text: "Hi there! 😃" },
    { id: 2, text: "How are you doing? 🙂" },
    { id: 3, text: "What are you up to today? 🤔" },
    { id: 4, text: "Im good, thanks. How about you? 😊" },
    { id: 5, text: "Im doing well, thanks for asking. 😄" },
  ],
  newMessageBody: "new",
  dialogStore: [
    { id: 1, name: "Maxym" },
    { id: 2, name: "Sarah" },
    { id: 3, name: "John" },
    { id: 4, name: "Emily" },
    { id: 5, name: "David" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;

    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = " ";
      state.messages.push({ id: 6, text: body });
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};

export const updateMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  };
};

export default dialogsReducer;
