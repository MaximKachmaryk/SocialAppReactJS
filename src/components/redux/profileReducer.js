const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST = "UPDATE_NEW_POST";

let initialState = {
  postData: [
    { id: 1, text: "Hi there!", likes: 2 },
    { id: 2, text: "How are you doing?", likes: 5 },
    { id: 3, text: "What are you up to today?", likes: 0 },
    { id: 4, text: "Im good, thanks. How about you?", likes: 1 },
    { id: 5, text: "Im doing well, thanks for asking.", likes: 3 },
  ],
  postNewData: ["postNewData"],

 
  
 /*  dialogStore: [
    { id: 1, name: "Maxym" },
    { id: 2, name: "Sarah" },
    { id: 3, name: "John" },
    { id: 4, name: "Emily" },
    { id: 5, name: "David" },
  ], */
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: state.postData.length + 1,
        text: state.postNewData,
        likes: 0,
      };
      return {
        ...state,
        postData: [...state.postData, newPost],
        postNewData: "",
      };
    case UPDATE_NEW_POST:
      return {
        ...state,
        postNewData: action.text,
      };
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST,
    text: text,
  };
};

export default profileReducer;
