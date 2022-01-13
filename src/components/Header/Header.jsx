import React from "react";
import classes from "./Header.module.css";
import logo from "../../img/logo.png";
import { NavLink } from "react-router-dom";
import userPhoto from "../assets/images/headache.png";

const Header = ({ isAuth, login, loginOut }) => {
  return (
    <header className={classes.header}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <NavLink to="/">
          <img className={classes.img} src={logo} alt="" />
        </NavLink>
        <h2 className="title" style={{ marginLeft: 5 }}>
          Title
        </h2>
      </div>
      <div className={classes.loginBlock}>
        {isAuth ? (
          <>
            <NavLink to="/profile">
              <img
                style={{
                  width: 50,
                  borderRadius: 25,
                  backgroundColor: "#ffffff",
                }}
                src={userPhoto}
                alt=""
              />
            </NavLink>
            <span style={{ margin: "0 5px" }}>{login}</span>{" "}
            <button onClick={loginOut}>Log Out</button>
          </>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
