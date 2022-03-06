const ADD_MESSAGE = "ADD_MESSAGE";

type DialogType = {
  id: number;
  name: string;
};
type MessageType = {
  id: number;
  message: string;
};

let initialState = {
  dialogs: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Viktor" },
    { id: 6, name: "Valera" },
  ] as Array<DialogType>,
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" },
  ] as Array<MessageType>,
  currentId: 6,
};

export type InitialStateType = typeof initialState;

const dialogsReducer = (
  state = initialState,
  action: any
): InitialStateType => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: state.currentId++,
        message: action.newMassageBody,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    default:
      return state;
  }
};

type AddMessageActionCreatorType = {
  type: typeof ADD_MESSAGE;
  newMassageBody: string;
};

export const addMessageActionCreator = (
  newMassageBody: string
): AddMessageActionCreatorType => {
  return {
    type: ADD_MESSAGE,
    newMassageBody,
  };
};

export default dialogsReducer;
