import classes from './Post.module.css';

const Post = () => {
	return (
		<div className={classes.item}>
			<img
				src='https://thumbs.dfs.ivi.ru/storage33/contents/4/9/8f79f46c73b1cbc9d08583fed780b1.jpg'
				alt=''
			/>
			post1
			<div>
				<span>like</span>
			</div>
		</div>
	);
};

export default Post;
