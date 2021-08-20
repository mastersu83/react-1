import "./App.css";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Route path="/" render={() => <Header />} />
      <Content store={props.store} />
    </div>
  );
};

export default App;
