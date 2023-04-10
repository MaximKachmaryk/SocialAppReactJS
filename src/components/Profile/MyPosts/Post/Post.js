import styles from "./Post.css";
function Post(props) {
  return (
    <>
      <div>
        <img
          className="img-post"
          src="https://images.prom.ua/3804098992_w640_h640_plakat-stepan-andreevich.jpg"
          alt="PostLogo"
        />
        <div>post1</div>
        <span>Like</span>
        <span>Dislike</span>
        <div className={styles.post}>
          <p>{props.text}</p>
        </div>
      </div>
    </>
  );
}
export default Post;
