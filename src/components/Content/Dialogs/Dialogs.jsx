import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.addMessage();
  };

  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} />
  ));

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.items}>{dialogsElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
      <div>
        <textarea
          className={classes.textarea}
          ref={newMessageElement}
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
