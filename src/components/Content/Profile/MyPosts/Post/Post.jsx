import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img
        src="https://thumbs.dfs.ivi.ru/storage33/contents/4/9/8f79f46c73b1cbc9d08583fed780b1.jpg"
        alt=""
      />
      {props.message}
      <div>
        <span>like {props.likeCount}</span>
      </div>
    </div>
  );
};

export default Post;
