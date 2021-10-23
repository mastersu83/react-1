import React from "react";
import "./App.css";
import Content from "./components/Content/Content";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Route path="/" render={() => <HeaderContainer />} />
      <Content />
    </div>
  );
};
export default App;
