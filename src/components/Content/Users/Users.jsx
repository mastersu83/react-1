import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/headache.png";
import { NavLink } from "react-router-dom";
import Paginator from "../../common/Paginator/Paginator";
// import { useDispatch } from "react-redux";
// import { getIdUserProfile } from "../../../Redux/profile_reducer";

const Users = ({
  totalUsersCount,
  pageSize,
  followingInProgress,
  followThunk,
  unfollowThunk,
  currentPage,
  onPageChanged,
  ...props
}) => {
  return (
    <div>
      <div className={classes.users}>
        <Paginator
          totalUsersCount={totalUsersCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChanged={onPageChanged}
        />
        {props.users.map((u) => (
          <div key={u.id} className={classes.userBlock}>
            <div>{u.id}</div>
            <NavLink to={"/profile/" + u.id}>
              <img
                // onClick={() => getUserId(u.id)}
                src={u.photos.small != null ? u.photos.small : userPhoto}
                alt=""
                className={classes.userPhoto}
              />
            </NavLink>
            <div>
              {u.followed ? (
                <button
                  disabled={followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    unfollowThunk(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    followThunk(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>

            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
