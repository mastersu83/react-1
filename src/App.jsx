import "./App.css";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Route path="/" render={() => <Header />} />
      <Content
      // store={props.store}
      />
    </div>
  );
};
export default App;
