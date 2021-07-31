import classes from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.items}>
        <div className={`${classes.item} ${classes.active}`}>Dimych</div>
        <div className={classes.item}>Andrey</div>
        <div className={classes.item}>Sveta</div>
        <div className={classes.item}>Sasha</div>
        <div className={classes.item}>Viktor</div>
        <div className={classes.item}>Valery</div>
      </div>
      <div className={classes.messages}>
        <div className={classes.message}>Hi</div>
        <div className={classes.message}>How are you</div>
        <div className={classes.message}>Yo</div>
      </div>
    </div>
  );
};

export default Dialogs;
