import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    props.updateNewPostText("");
  };

  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likeCount={p.likeCount} />
  ));

  let onPostChange = () => {
    let text = newPostElement.current.value;
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
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={classes.item}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
