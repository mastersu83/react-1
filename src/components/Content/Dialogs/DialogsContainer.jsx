import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../../Redux/dialogs_reducer";
import Dialogs from "./DialogsC";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
  };
};

export default compose(
  connect(mapStateToProps, {
    addMessageActionCreator,
    updateNewMessageTextActionCreator,
  }),
  withAuthRedirect
)(Dialogs);
