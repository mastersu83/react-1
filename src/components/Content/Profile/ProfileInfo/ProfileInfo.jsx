import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../../common/Preloader/Preloader';
import userPhoto from '../../../assets/images/headache.png';
// import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
// import { useSelector } from "react-redux";
// import { getStatusSelector } from "../../../../redux/profile_selectors";

const ProfileInfo = ({ profile, status, updateStatusThunk }) => {
  // const status = useSelector(getStatusSelector);

  if (!profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        <div>{profile.userId}</div>
        <img
          src={profile.photos.large != null ? profile.photos.small : userPhoto}
          alt=""
          className={classes.userPhoto}
        />
        <ProfileStatusWithHooks
          // status={status} />
          status={status}
          updateStatusThunk={updateStatusThunk}
        />
        <div>{profile.fullName}</div>
      </div>
      <div>
        <h3>Контакты</h3>
        <div>Facebook: {profile.contacts.facebook}</div>
        <div>Вконтакте: {profile.contacts.vk}</div>
        <div>Twitter: {profile.contacts.twitter}</div>
        <div>Instagram: {profile.contacts.instagram}</div>
        <div>Github: {profile.contacts.github}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
