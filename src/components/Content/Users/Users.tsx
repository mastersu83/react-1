import React, { FC } from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/headache.png";
import { NavLink } from "react-router-dom";
import Paginator from "../../common/Paginator/Paginator";
import { UserType } from "../../../types/types";
// import { useDispatch } from "react-redux";
// import { getIdUserProfile } from "../../../redux/profile_reducer";

type PropsType = {
  totalUsersCount: number;
  pageSize: number;
  onPageChanged: (currentPage: number) => void;
  currentPage: number;
  users: Array<UserType>;
  followingInProgress: Array<number>;
  followThunk: (userId: number) => void;
  unfollowThunk: (userId: number) => void;
};

const Users: FC<PropsType> = ({
  totalUsersCount,
  pageSize,
  followingInProgress,
  followThunk,
  unfollowThunk,
  currentPage,
  onPageChanged,
  users,
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
        {users.map((u) => (
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
