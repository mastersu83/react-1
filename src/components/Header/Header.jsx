import React from "react";
import classes from "./Header.module.css";
import logo from "../../img/logo.png";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  // debugger;
  return (
    <header className={classes.header}>
      <NavLink to="/">
        <img className={classes.img} src={logo} alt="" />
      </NavLink>
      <div className="title">Title</div>
      <div className={classes.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
