import { addPostActionCreator } from "../../../../redux/profile_reducer";
import { connect } from "react-redux";
import MyPosts from "./MyPosts";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

export default compose(
  connect(mapStateToProps, {
    addPostActionCreator,
  })
)(MyPosts);
