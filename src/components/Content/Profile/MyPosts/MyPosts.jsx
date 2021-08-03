import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsData = [
    { id: 1, message: "Hi, how are you?", likeCount: 33 },
    { id: 2, message: "It's my first post", likeCount: 45 },
  ];
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
        <Post
          message={postsData[0].message}
          likeCount={postsData[0].likeCount}
        />
        <Post
          message={postsData[1].message}
          likeCount={postsData[1].likeCount}
        />
      </div>
    </div>
  );
};

export default MyPosts;
