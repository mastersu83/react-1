import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import { Field, reduxForm } from "redux-form";

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
      <AddMassageFormRedux onSubmit={addMessage} />
    </div>
  );
};

const AddMassageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"enter massage"}
          name={"newMassageBody"}
          component={"textarea"}
          className={classes.textarea}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddMassageFormRedux = reduxForm({
  form: "dialogAddMassageForm",
})(AddMassageForm);

export default Dialogs;
