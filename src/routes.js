// router.js
import React from "react";
import { Router, Route } from "react-router-dom";
import Home from "./components/Home";
const MyRouter = () => {
  const location = window.location;
  const navigator = window.navigator;

  return (
    <Router location={location} navigator={navigator}>
      <Route path="/" component={Home} />
    </Router>
  );
};

export default MyRouter;
