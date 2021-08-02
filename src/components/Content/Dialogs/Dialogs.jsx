import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={`${classes.item} ${classes.active}`}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={classes.message}>{props.message}</div>;
};

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.items}>
        <DialogItem name="Dimych" id="1" />
        <DialogItem name="Andrey" id="2" />
        <DialogItem name="Sveta" id="3" />
        <DialogItem name="Sasha" id="4" />
        <DialogItem name="Viktor" id="5" />
        <DialogItem name="Valery" id="6" />
      </div>
      <div className={classes.messages}>
        <Message message="Hi" />
        <Message message="How are you" />
        <Message message="Yo" />
      </div>
    </div>
  );
};

export default Dialogs;
