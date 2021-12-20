import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/headache.png";
import { NavLink } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { getIdUserProfile } from "../../../Redux/profile_reducer";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  // const dispatch = useDispatch();
  //
  // const getUserId = (id) => {
  //   dispatch(getIdUserProfile(id));
  // };

  return (
    <div>
      <div className={classes.users}>
        <div>
          {pages.map((p) => {
            return (
              <span
                key={p}
                className={`${
                  props.currentPage === p && classes.selectedPage
                }  ${classes.pageNum}`}
                onClick={() => {
                  props.onPageChanged(p);
                }}
              >
                {p}
              </span>
            );
          })}
        </div>
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
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.unfollowThunk(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.followThunk(u.id);
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
