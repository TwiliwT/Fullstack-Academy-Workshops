import { Routes, Route } from "react-router-dom";

import Blue from "./Blue";
import Red from "./Red";
import Yellow from "./Yellow";
import Purple from "./Purple";
import Home from "./Home";

function MainSection() {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/yellow" element={<Yellow />} />
        <Route path="/purple" element={<Purple />} />
      </Routes>
    </div>
  );
}

export default MainSection;
