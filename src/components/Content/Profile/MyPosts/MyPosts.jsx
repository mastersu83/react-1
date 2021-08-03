import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let posts = [
    { id: 1, message: "Hi, how are you?", likeCount: 33 },
    { id: 2, message: "It's my first post", likeCount: 45 },
    { id: 3, message: "blabla", likeCount: 73 },
    { id: 4, message: "aldfl", likeCount: 12 },
  ];

  let postsElements = posts.map((p) => (
    <Post message={p.message} likeCount={p.likeCount} />
  ));
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
      <div className={classes.item}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
