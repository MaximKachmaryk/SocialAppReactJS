import "./Profile.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
function Profile(props) {
  return (
    <div className="content">
      <ProfileInfo />
      <MyPosts
        postData={props.postData}
       /*  addPost={props.addPost} */
        postNewData={props.postNewData}
        dispatch={props.dispatch}
      />
    </div>
  );
}
export default Profile;
