import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
  let onAddPost = () => {
    props.addPostActionCreator();
  };

  let postsElements = props.posts.map((p) => (
    <Post key={p.id} message={p.message} likeCount={p.likeCount} />
  ));

  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostTextActionCreator(text);
  };
  return (
    <div className={classes.postsBlock}>
      <h2>My posts {props.message}</h2>
      <div>
        <div>
          <textarea
            className={classes.textarea}
            onChange={onPostChange}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={classes.item}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
