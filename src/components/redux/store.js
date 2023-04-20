/* import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sidebarReducer";

/* const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST = "UPDATE_NEW_POST";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";
 */
let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, text: "Hi there!", likes: 2 },
        { id: 2, text: "How are you doing?", likes: 5 },
        { id: 3, text: "What are you up to today?", likes: 0 },
        { id: 4, text: "Im good, thanks. How about you?", likes: 1 },
        { id: 5, text: "Im doing well, thanks for asking.", likes: 3 },
      ],
      postNewData: ["postNewData"],
      dialogStore: [
        { id: 1, name: "Maxym" },
        { id: 2, name: "Sarah" },
        { id: 3, name: "John" },
        { id: 4, name: "Emily" },
        { id: 5, name: "David" },
      ],
    },
    messagesPage: {
      messages: [
        { id: 1, text: "Hi there! 😃" },
        { id: 2, text: "How are you doing? 🙂" },
        { id: 3, text: "What are you up to today? 🤔" },
        { id: 4, text: "Im good, thanks. How about you? 😊" },
        { id: 5, text: "Im doing well, thanks for asking. 😄" },
      ],newMessageBody: "new"
    },
    frendsState: {
      friends: [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 28 },
        { id: 4, name: "David", age: 35 },
      ],
    },
    
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("hhh");
  },
  _addPost() {
    let newPost = {
      id: this._state.profilePage.postData.length + 1,
      text: this._state.profilePage.postNewData,
      likes: 0,
    };
    this._state.profilePage.postData.push(newPost);
    this._state.profilePage.postNewData = "";
    this._callSubscriber(this._state);
  },
  _updateNewPost(text) {
    this._state.profilePage.postNewData = text;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
    this._state.frendsState = sideBarReducer(this._state.frendsState, action);
    this._callSubscriber(this._state);
  },
  /*  switch (action.type) {
      case ADD_POST:
        this._addPost();
        
        break;
      case UPDATE_NEW_POST:
        this._updateNewPost(action.newText);
       
        break;
      case UPDATE_NEW_MESSAGE_BODY:
        this._state.newMessageBody = action.body;
        this._callSubscriber(this._state);
        break;
      case SEND_MESSAGE:
        let body = this._state.newMessageBody;
        this._state.newMessageBody = "";
        this._state.messagesPage.messages.push({ id: 6, text: body });
        this._callSubscriber(this._state);
        break;

      default:
        console.log("Unknown action type");
    } */
};
/* export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST,
    newText: text,
  };
}; */
/* export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};
export const updateMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  };
}; */


 