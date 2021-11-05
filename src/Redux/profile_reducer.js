import { usersAPI } from '../api/api';

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';

let initialState = {
	posts: [
		{ id: 1, message: 'Hi, how are you?', likeCount: 33 },
		{ id: 2, message: "It's my first post", likeCount: 45 },
		{ id: 3, message: 'welcome', likeCount: 73 },
		{ id: 4, message: 'hello', likeCount: 12 },
	],
	newPostText: '',
	profile: null,
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 5,
				message: state.newPostText,
				likeCount: 0,
			};
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: '',
			};
		}
		case UPDATE_NEW_POST_TEXT: {
			return { ...state, newPostText: action.newText };
		}
		case SET_USERS_PROFILE: {
			return { ...state, profile: action.profile };
		}
		default:
			return state;
	}
};

export const addPostActionCreator = () => {
	return {
		type: ADD_POST,
	};
};
export const setUsersProfile = (profile) => ({
	type: SET_USERS_PROFILE,
	profile,
});
export const updateNewPostTextActionCreator = (text) => {
	return {
		type: UPDATE_NEW_POST_TEXT,
		newText: text,
	};
};

export const setUsersProfileThunk = (userId) => {
	return (dispatch) => {
		usersAPI.getProfile(userId).then((data) => {
			dispatch(setUsersProfile(data));
		});
	};
};

export default profileReducer;
