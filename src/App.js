import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components1/Header";
import Home from "./pages/Home";
import Port1 from "./pages/Port1";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Port1 />} />
        <Route path="/port1" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
