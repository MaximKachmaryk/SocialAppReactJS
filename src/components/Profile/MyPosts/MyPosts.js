import React, { useRef } from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostActionCreator, updateNewPostActionCreator} from "../../redux/profileReducer";


function MyPosts(props) {
  const { postData, postNewData } = props;
  const newPostEl = useRef(null);

  const addNewPost = (event) => {
   /*  event.preventDefault(); */
    const newtext = newPostEl.current.value;
    if (newtext) {
      props.dispatch(addPostActionCreator());
    /*   newPostEl.current.value = ""; */
    }
  };

  const onChangePost = (event) => {
    let text = event.target.value;
    let action =updateNewPostActionCreator(text);
    props.dispatch(action);
  };

  const postsElements = postData.map((el) => (
    <Post key={el.id} text={el.text} likes={el.likes} />
  ));

  return (
    <div className={styles["my-posts"]}>
      <div className={styles["my-posts__title"]}>My posts</div>
      <textarea
        className={styles["my-posts__textarea"]}
        onChange={onChangePost}
        ref={newPostEl}
        value={postNewData}
      />
      <button
        className={styles["my-posts__button"]}
        type="button"
        onClick={addNewPost}
      >
        Add post
      </button>
      <div className={styles["my-posts__new-post"]}>New post</div>
      <div className={styles["my-posts__post-list"]}>{postsElements}</div>
    </div>
  );
}

export default MyPosts;