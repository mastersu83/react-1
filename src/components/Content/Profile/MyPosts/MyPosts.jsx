import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likeCount={p.likeCount} />
  ));
  return (
    <div className={classes.postsBlock}>
      <h2>My posts {props.message}</h2>
      <div>
        <div>
          <textarea className={classes.textarea}></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={classes.item}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
