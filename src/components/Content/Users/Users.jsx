import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/headache.png";
import * as axios from "axios";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return (
      <div className={classes.user}>
        {this.props.users.map((u) => (
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
                      this.props.unfollow(u.id);
                    }}
                  >
                    follow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id);
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
  }
}

export default Users;
