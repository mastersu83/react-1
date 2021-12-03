import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import { Field, reduxForm } from "redux-form";

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
        <AddPostFormRedux onSubmit={onAddPost} />
      </div>
      <div className={classes.item}>{postsElements}</div>
    </div>
  );
};

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"enter massage"}
          name={"newPostBody"}
          component={"textarea"}
          className={classes.textarea}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddPostFormRedux = reduxForm({
  form: "profileAddPostForm",
})(AddPostForm);

export default MyPosts;
