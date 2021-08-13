import "./App.css";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Navbar from "./components/Navbar/Navbar";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Content state={props.state} dispatch={props.dispatch} />
    </div>
  );
};

export default App;
