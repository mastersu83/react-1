import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../../Redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

// const DialogsContainer = (props) => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let addMessage = () => {
//           store.dispatch(addMessageActionCreator());
//         };
//
//         let onMessageChange = (text) => {
//           let action = updateNewMessageTextActionCreator(text);
//           store.dispatch(action);
//         };
//         return (
//           <Dialogs
//             dialogsPage={store.getState().dialogsPage}
//             addMessage={addMessage}
//             onMessageChange={onMessageChange}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    onMessageChange: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
