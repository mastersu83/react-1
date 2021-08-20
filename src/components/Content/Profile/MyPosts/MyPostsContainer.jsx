import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../../Redux/profile_reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };
  return (
    <MyPosts
      updateNewPostText={onPostChange}
      posts={props.store.getState().profilePage.posts}
      addPost={addPost}
    />
  );
};

export default MyPostsContainer;
