import React, { useRef } from "react";

import Post from "./Post/Post";
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../redux/profileReducer";
import MyPosts from "./MyPosts";

function MyPostsContainer(props) {
  const { postData, postNewData } = props;
  const newPostEl = useRef(null);

  const addNewPost = () => {
    props.dispatch(addPostActionCreator());
  };

  const onChangePost = () => {
    let action = updateNewPostActionCreator(text);
    props.dispatch(action);
  };


  return (
    <MyPosts
      postData={postData}
      postNewData={postNewData}
      onChangePost={onChangePost}
      addNewPost={addNewPost}
      newPostEl={newPostEl}
      postsElements={postsElements}
    />
  );
}

export default MyPostsContainer;
