import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getAuthorizedUserIdSelector,
//   getProfileSelector,
//   idUserProfileSelector,
// } from "../../../Redux/profile_selectors";
// import {
//   setStatusThunk,
//   setUsersProfileThunk,
// } from "../../../Redux/profile_reducer";
// import { setAuthUserDataThunk } from "../../../Redux/auth_reducer";

const Profile = ({ profile, status, updateStatusThunk }) => {
  // const dispatch = useDispatch();
  //
  // const profile = useSelector(getProfileSelector);
  // let idUserProfile = useSelector(idUserProfileSelector);
  // const authorizedUserId = useSelector(getAuthorizedUserIdSelector);
  // if (idUserProfile === null) {
  //   idUserProfile = authorizedUserId;
  // }
  //
  // React.useEffect(() => {
  //   dispatch(setUsersProfileThunk(idUserProfile));
  //   dispatch(setAuthUserDataThunk(idUserProfile));
  //   dispatch(setStatusThunk(idUserProfile));
  // }, []);

  return (
    <div>
      <ProfileInfo
        profile={profile}
        status={status}
        updateStatusThunk={updateStatusThunk}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
