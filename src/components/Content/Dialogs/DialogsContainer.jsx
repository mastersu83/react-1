import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../../Redux/dialogs_reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let onMessageChange = (text) => {
    let action = updateNewMessageTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <Dialogs
      dialogsPage={props.store.getState().dialogsPage}
      addMessage={addMessage}
      onMessageChange={onMessageChange}
    />
  );
};

export default DialogsContainer;
