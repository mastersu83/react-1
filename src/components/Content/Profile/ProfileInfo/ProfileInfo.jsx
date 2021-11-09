import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/headache.png";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      {/*<img*/}
      {/*  className={classes.img}*/}
      {/*  src="https://7oom.ru/wp-content/uploads/peizaji-01.jpg"*/}
      {/*  alt=""*/}
      {/*/>*/}
      <div>
        <img
          src={
            props.profile.photos.large != null
              ? props.profile.photos.small
              : userPhoto
          }
          alt=""
          className={classes.userPhoto}
        />
        <ProfileStatus status={"hello"} />
        <div>{props.profile.fullName}</div>
      </div>
      <div>
        <h3>Контакты</h3>
        <div>Facebook: {props.profile.contacts.facebook}</div>
        <div>Вконтакте: {props.profile.contacts.vk}</div>
        <div>Twitter: {props.profile.contacts.twitter}</div>
        <div>Instagram: {props.profile.contacts.instagram}</div>
        <div>Github: {props.profile.contacts.github}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
