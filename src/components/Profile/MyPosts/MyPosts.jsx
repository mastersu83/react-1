import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
	return (
		<div>
			<p>My posts</p>
			<div>
				<textarea></textarea>
				<button>Add post</button>
			</div>
			<div className={classes.item}>
				<Post />
				<Post />
				<Post />
				<Post />
			</div>
		</div>
	);
};

export default MyPosts;
