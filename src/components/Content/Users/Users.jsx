import React from "react";
import classes from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/images/headache.png";

const Users = (props) => {
  let getUsers = () => {
    if (props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          props.setUsers(response.data.items);
        });
    }
  };

  debugger;

  return (
    <div className={classes.user}>
      <button onClick={getUsers}>get users</button>
      {props.users.map((u) => (
        <div key={u.id} className={classes.userBlock}>
          <span>
            <div>
              <img
                src={u.photos.small != null ? u.photos.small : userPhoto}
                alt=""
                className={classes.userPhoto}
              />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  follow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  unfollow
                </button>
              )}
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
  );
};

export default Users;
