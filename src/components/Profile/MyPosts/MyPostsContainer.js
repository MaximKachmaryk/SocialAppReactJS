import { connect } from "react-redux";
import MyPosts from "./MyPosts";
import {
  addPostActionCreator,
  updateNewPostActionCreator
} from "../../redux/profileReducer";

const mapStateToProps = state => {
  return {
    postData: state.profilePage.postData,
    postNewData: state.profilePage.postNewData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNewPost: () => {
      dispatch(addPostActionCreator());
    },
    onChangePost: text => {
      dispatch(updateNewPostActionCreator(text));
    }
  };
};

const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);

export default MyPostsContainer;