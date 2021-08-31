import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../../Redux/profile_reducer";
import { connect } from "react-redux";
import MyPosts from "./MyPostsC";

// const MyPostsContainer = (props) => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let addPost = () => {
//           store.dispatch(addPostActionCreator());
//         };
//
//         let onPostChange = (text) => {
//           let action = updateNewPostTextActionCreator(text);
//           store.dispatch(action);
//         };
//
//         return (
//           <MyPosts
//             updateNewPostText={onPostChange}
//             posts={store.getState().profilePage.posts}
//             addPost={addPost}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
