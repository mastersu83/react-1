import "./App.css";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Navbar from "./components/Navbar/Navbar";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Content
        state={props.state}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
        addMessage={props.addMessage}
        updateNewMessageText={props.updateNewMessageText}
      />
    </div>
  );
};

export default App;
