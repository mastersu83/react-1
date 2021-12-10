import { profileAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_STATUS = "SET_STATUS";
const UPDATE_STATUS_TEXT = "UPDATE_STATUS_TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likeCount: 33 },
    { id: 2, message: "It's my first post", likeCount: 45 },
    { id: 3, message: "welcome", likeCount: 73 },
    { id: 4, message: "hello", likeCount: 12 },
  ],
  profile: null,
  currentId: 5,
  status: "",
  updateStatusText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: state.currentId++,
        message: action.newPostBody,
        likeCount: 0,
      };
      return {
        ...state,
        posts: [newPost, ...state.posts],
      };
    }
    case SET_USERS_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    case UPDATE_STATUS_TEXT: {
      return { ...state, status: action.text };
    }

    default:
      return state;
  }
};

export const addPostActionCreator = (newPostBody) => {
  return {
    type: ADD_POST,
    newPostBody,
  };
};
export const setUsersProfile = (profile) => ({
  type: SET_USERS_PROFILE,
  profile,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export const updateStatusText = (text) => {
  return {
    type: UPDATE_STATUS_TEXT,
    text,
  };
};

export const setUsersProfileThunk = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then((data) => {
      dispatch(setUsersProfile(data));
    });
  };
};
export const setStatusThunk = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((response) => {
      dispatch(setStatus(response.data));
    });
  };
};

export const updateStatusThunk = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};

export default profileReducer;
