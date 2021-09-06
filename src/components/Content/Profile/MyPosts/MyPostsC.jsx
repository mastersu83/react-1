import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

class MyPostsC extends React.Component {
	onAddPost = () => {
		this.props.addPost();
	};

	onPostChange = (e) => {
		let text = e.target.value;
		this.props.updateNewPostText(text);
	};

	render() {
		return (
			<div className={classes.postsBlock}>
				<h2>My posts {this.props.message}</h2>
				<div>
					<div>
						<textarea
							className={classes.textarea}
							onChange={this.onPostChange}
							value={this.props.newPostText}
						/>
					</div>
					<div>
						<button onClick={this.onAddPost}>Add post</button>
					</div>
				</div>
				<div className={classes.item}>
					{this.props.posts.map((p) => (
						<Post message={p.message} likeCount={p.likeCount} key={p.id} />
					))}
				</div>
			</div>
		);
	}
}

export default MyPostsC;
