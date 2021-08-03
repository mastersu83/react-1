import { NavLink } from "react-router-dom";
import classes from "./DialogItem.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div>
      <NavLink
        to={path}
        className={classes.item}
        activeClassName={classes.active}
      >
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
