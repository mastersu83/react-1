import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import AddPostForm from "./AddPostForm/AddPostForm";

const MyPosts = (props) => {
  let onAddPost = (value) => {
    props.addPostActionCreator(value.newPostBody);
  };

  let postsElements = props.posts.map((p) => (
    <Post key={p.id} message={p.message} likeCount={p.likeCount} />
  ));

  return (
    <div className={classes.postsBlock}>
      <h2>My posts {props.message}</h2>
      <div>
        <AddPostForm onSubmit={onAddPost} />
      </div>
      <div className={classes.item}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
