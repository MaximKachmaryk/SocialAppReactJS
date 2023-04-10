/* import { renderEntireTree } from "../../render"; */
let renderEntireTree = () => {
  console.log("hhh");
};
let state = {
  profilePage: {
    postData: [
      { id: 1, text: "Hi there!", likes: 2 },
      { id: 2, text: "How are you doing?", likes: 5 },
      { id: 3, text: "What are you up to today?", likes: 0 },
      { id: 4, text: "Im good, thanks. How about you?", likes: 1 },
      { id: 5, text: "Im doing well, thanks for asking.", likes: 3 },
    ],
    postNewData: "postNewData",
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
    ],
  },
  frendsState: {
    friends: [
      { id: 1, name: "Alice", age: 25 },
      { id: 2, name: "Bob", age: 30 },
      { id: 3, name: "Charlie", age: 28 },
      { id: 4, name: "David", age: 35 },
    ],
  },
};
export let addPost = () => {
  let newPost = {
    id: state.profilePage.postData.length + 1,
    text: state.profilePage.postNewData,
    likes: 0,
  };

  state.profilePage.postData.push(newPost);
  state.profilePage.postNewData = "";
  renderEntireTree(state);
};

export let updateNewPost = (newtext) => {
  state.profilePage.postNewData = newtext;

  renderEntireTree();
};
export const subscribe = (observer) => {
  renderEntireTree = observer;
};

export default state;
