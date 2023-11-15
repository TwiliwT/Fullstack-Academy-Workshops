import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div id="container">
      <div id="navbar">
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/blue" element={<h1>Blue</h1>} />
          <Route path="/red" element={<h1>Red</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
