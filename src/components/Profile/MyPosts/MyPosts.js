import React, { useRef } from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts({ postData, addPost, postNewData, updateNewPost }) {
  const newPostEl = useRef(null);

  const addNewPost = (event) => {
    event.preventDefault();
    const newtext = newPostEl.current.value.trim();
    if (newtext) {
      addPost(newtext);
      newPostEl.current.value = "";
    }
  };

  const onChangePost = (event) => {
    const text = event.target.value;
    updateNewPost(text);
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
