import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import AddMassageForm from "./AddMassegeForm/AddMassegeForm";

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} />
  ));

  let messagesElements = props.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  let addMessage = (value) => {
    props.addMessageActionCreator(value.newMassageBody);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.items}>{dialogsElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
      <AddMassageForm onSubmit={addMessage} />
    </div>
  );
};

export default Dialogs;
