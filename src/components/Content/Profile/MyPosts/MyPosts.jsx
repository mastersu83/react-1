import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  return (
    <div className={classes.postsBlock}>
      <h2>My posts {props.message}</h2>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={classes.item}>
        <Post message="Hi, how are you?" likeCount="78" />
        <Post message="It's my first post" likeCount="65" />
      </div>
    </div>
  );
};

export default MyPosts;
