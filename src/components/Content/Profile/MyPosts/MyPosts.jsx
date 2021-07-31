import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
	return (
		<div>
			<p>My posts {props.message}</p>
			<div>
				<textarea></textarea>
				<button>Add post</button>
			</div>
			<div className={classes.item}>
				<Post message="Hi, how are you?" likeCount="78" />
				<Post message="It's my first post" likeCount="65" />
			</div>
		</div>
	);
};

export default MyPosts;
