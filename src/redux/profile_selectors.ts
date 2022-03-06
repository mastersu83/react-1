import { AppStateType } from "./redux_store";

export const getProfileSelector = (state: AppStateType) => {
  return state.profilePage.profile;
};

export const getStatusSelector = (state: AppStateType) => {
  return state.profilePage.status;
};
export const getAuthorizedUserIdSelector = (state: AppStateType) => {
  return state.auth.userId;
};
export const geIisAuthSelector = (state: AppStateType) => {
  return state.auth.isAuth;
};
// export const idUserProfileSelector = (state) => {
//   return state.profilePage.idUserProfile;
// };
