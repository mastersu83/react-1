import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
  console.log(props);
  let dialogsElements = props.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} />
  ));

  let messagesElements = props.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  let addMessage = () => {
    props.addMessage();
  };

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.onMessageChange(text);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.items}>{dialogsElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
      <div>
        <textarea
          className={classes.textarea}
          onChange={onMessageChange}
          value={props.newMessageText}
        />
      </div>
      <div>
        <button onClick={addMessage}>Add post</button>
      </div>
    </div>
  );
};

export default Dialogs;
