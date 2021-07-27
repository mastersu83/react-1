import classes from "./Header.module.css";
import logo from "../../img/logo.png";

const Header = () => {
  return (
    <header className={classes.header}>
      <img className={classes.img} src={logo} alt="" />
      <div className="title">Title</div>
    </header>
  );
};

export default Header;
