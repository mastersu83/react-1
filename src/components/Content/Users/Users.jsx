import React from "react";
import classes from "./Users.module.css";
import * as axios from "axios";

const Users = (props) => {
  if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        debugger;
        props.setUsers(response.data.items);
      });

    // props.setUsers([
    //   {
    //     id: 1,
    //     photoUrl:
    //       "https://lh3.googleusercontent.com/zFHYZBfsabzJCQphM_OZ1pvtPKDNnn5dd8a7rAYCOJi4DLvUM47UEBSVXEWPwxGuFv42=s85",
    //     followed: false,
    //     fullName: "Suren",
    //     status: "I am a boss",
    //     location: { city: "Pyatigorsk", country: "Russia" },
    //   },
    //   {
    //     id: 2,
    //     photoUrl:
    //       "https://lh3.googleusercontent.com/zFHYZBfsabzJCQphM_OZ1pvtPKDNnn5dd8a7rAYCOJi4DLvUM47UEBSVXEWPwxGuFv42=s85",
    //     followed: true,
    //     fullName: "Dima",
    //     status: "I am a boss too",
    //     location: { city: "Minsk", country: "Belarus" },
    //   },
    //   {
    //     id: 3,
    //     photoUrl:
    //       "https://lh3.googleusercontent.com/zFHYZBfsabzJCQphM_OZ1pvtPKDNnn5dd8a7rAYCOJi4DLvUM47UEBSVXEWPwxGuFv42=s85",
    //     followed: false,
    //     fullName: "Sasha",
    //     status: "I am a boss too",
    //     location: { city: "Kiev", country: "Ukraine" },
    //   },
    // ]);
  }

  return (
    <div className={classes.user}>
      {props.users.map((u) => (
        <div key={u.id} className={classes.userBlock}>
          <span>
            <div>
              <img src={u.photoUrl} alt="" className={classes.userPhoto} />
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
            <div>{u.fullName}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
