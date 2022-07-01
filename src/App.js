import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./views/Home/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>
    </Router>
  );
}
