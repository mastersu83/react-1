import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likeCount: 33 },
      { id: 2, message: "It's my first post", likeCount: 45 },
      { id: 3, message: "welcome", likeCount: 73 },
      { id: 4, message: "hello", likeCount: 12 },
    ],
    newPostText: "",
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: "Dimych" },
      { id: 2, name: "Andrey" },
    ],
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How are you" },
      { id: 3, message: "Yo" },
      { id: 4, message: "Yo" },
      { id: 5, message: "Yo" },
    ],
    newMessageText: "",
  },
};

window.state = state;

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likeCount: 0,
  };
  state.profilePage.posts.unshift(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export let addMessage = () => {
  let newMessage = {
    id: 5,
    message: state.dialogsPage.newMessageText,
  };
  state.dialogsPage.messages.unshift(newMessage);
  state.dialogsPage.newMessageText = "";
  rerenderEntireTree(state);
};

export let updateNewMessageText = (newText) => {
  state.dialogsPage.newMessageText = newText;
  rerenderEntireTree(state);
};

export default state;
