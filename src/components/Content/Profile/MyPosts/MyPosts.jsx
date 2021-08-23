import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
  console.log(props);
  let onAddPost = () => {
    props.addPost();
  };

  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likeCount={p.likeCount} />
  ));

  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
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
