import {
	addPostActionCreator,
	updateNewPostTextActionCreator,
} from "../../../../Redux/profile_reducer";
import { connect } from "react-redux";
import MyPosts from "./MyPostsC";

let mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText,
	};
};
let mapDispatchToProps = (dispatch) => {
	return {
		addPost: () => {
			dispatch(addPostActionCreator());
		},
		updateNewPostText: (text) => {
			dispatch(updateNewPostTextActionCreator(text));
		},
	};
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
