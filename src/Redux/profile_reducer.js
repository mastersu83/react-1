import { profileAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_STATUS = "SET_STATUS";
// const GET_ID_USER_PROFILE = "GET_ID_USER_PROFILE";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likeCount: 33 },
    { id: 2, message: "It's my first post", likeCount: 45 },
    { id: 3, message: "welcome", likeCount: 73 },
    { id: 4, message: "hello", likeCount: 12 },
  ],
  profile: null,
  idUserProfile: null,
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
        posts: [...state.posts, newPost],
      };
    }
    case SET_USERS_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    // case GET_ID_USER_PROFILE: {
    //   return { ...state, idUserProfile: action.id };
    // }

    default:
      return state;
  }
};

// export const getIdUserProfile = (id) => {
//   return {
//     type: GET_ID_USER_PROFILE,
//     id,
//   };
// };

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

export const setUsersProfileThunk = (userId) => async (dispatch) => {
  let data = await profileAPI.getProfile(userId);
  dispatch(setUsersProfile(data));
};
export const setStatusThunk = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatusThunk = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export default profileReducer;
