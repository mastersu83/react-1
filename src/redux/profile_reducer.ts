import { profileAPI } from "../api/api";
import { PostsType, ProfileType } from "../types/types";

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
  ] as Array<PostsType>,
  profile: null as Array<ProfileType> | null,
  idUserProfile: null as number | null,
  status: "",
  updateStatusText: "",
  currentId: 5,
};

export type InitialStateType = typeof initialState;

const profileReducer = (
  state = initialState,
  action: any
): InitialStateType => {
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

type AddPostActionCreatorType = {
  type: typeof ADD_POST;
  newPostBody: string;
};
export const addPostActionCreator = (
  newPostBody: string
): AddPostActionCreatorType => {
  return {
    type: ADD_POST,
    newPostBody,
  };
};

type SetUsersProfileActionType = {
  type: typeof SET_USERS_PROFILE;
  profile: ProfileType;
};
export const setUsersProfile = (
  profile: ProfileType
): SetUsersProfileActionType => ({
  type: SET_USERS_PROFILE,
  profile,
});

type SetStatusActionType = {
  type: typeof SET_STATUS;
  status: string;
};
export const setStatus = (status: string): SetStatusActionType => ({
  type: SET_STATUS,
  status,
});

export const setUsersProfileThunk =
  (userId: number) => async (dispatch: any) => {
    let data = await profileAPI.getProfile(userId);
    dispatch(setUsersProfile(data));
  };
export const setStatusThunk = (userId: number) => async (dispatch: any) => {
  let response = await profileAPI.getStatus(userId);
  console.log(response);
  dispatch(setStatus(response.data));
};

export const updateStatusThunk = (status: string) => async (dispatch: any) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export default profileReducer;
