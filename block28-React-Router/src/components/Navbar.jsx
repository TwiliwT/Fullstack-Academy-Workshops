import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <nav id="navbar">
      <Link to="/">
        <button className="home-button">Home</button>
      </Link>
      <Link to="/blue">
        <button className="blue-button">Blue</button>
      </Link>
      <Link to="/red">
        <button className="red-button">Red</button>
      </Link>
      <Link to="/yellow">
        <button className="yellow-button">Yellow</button>
      </Link>
      <Link to="/purple">
        <button className="purple-button">Purple</button>
      </Link>
    </nav>
  );
}

export default Navbar;
