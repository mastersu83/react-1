import { NavLink } from "react-router-dom";
import classes from "./DialogItem.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={classes.item}>
      <img
        className={classes.img}
        src="https://thumbs.dfs.ivi.ru/storage33/contents/4/9/8f79f46c73b1cbc9d08583fed780b1.jpg"
        alt=""
      />
      <NavLink
        className={classes.link}
        to={path}
        activeClassName={classes.active}
      >
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
