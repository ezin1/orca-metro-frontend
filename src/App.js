import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Teste from "./pages/Teste";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teste" element={<Teste />} />
      </Routes>
    </Router>
  );
}

export default App;
