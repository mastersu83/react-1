import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/headache.png";
import { NavLink } from "react-router-dom";
import * as axios from "axios";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div className={classes.user}>
        <div>
          {pages.map((p) => {
            return (
              <span
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
            <span>
              <div>
                <NavLink to={"/profile/" + u.id}>
                  <img
                    src={u.photos.small != null ? u.photos.small : userPhoto}
                    alt=""
                    className={classes.userPhoto}
                  />
                </NavLink>
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      axios
                        .delete(
                          `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,

                          {
                            withCredentials: true,
                            headers: {
                              "API-KEY": "8adacebe-0ada-4cf1-a6f3-ff0b4c1f9fde",
                            },
                          }
                        )
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            props.unfollow(u.id);
                          }
                        });
                    }}
                  >
                    unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      axios
                        .post(
                          `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                          {},
                          {
                            withCredentials: true,
                            headers: {
                              "API-KEY": "8adacebe-0ada-4cf1-a6f3-ff0b4c1f9fde",
                            },
                          }
                        )
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            props.follow(u.id);
                          }
                        });
                    }}
                  >
                    follow
                  </button>
                )}
                )
              </div>
            </span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
