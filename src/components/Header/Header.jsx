import classes from "./Header.module.css";
import logo from "../../img/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={classes.header}>
      <NavLink to="/">
        <img className={classes.img} src={logo} alt="" />
      </NavLink>
      <div className="title">Title</div>
    </header>
  );
};

export default Header;
