import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";



function Header() {
  const [searchInput, setSearchInput] = useState("");

  function handleChange(e) {
    e.preventDefault(e)
    setSearchInput(e.target.value)
    console.log(searchInput)
  }

  return (
    <>
      <div className="sticky-header">
        <div className="container-link">
          <Link to="/CreatePuppy">
            <p className="create-puppy-link">Create Puppy</p>
          </Link>
          <Link to="/">
            <p className="create-puppy-link">Home</p>
          </Link>
        </div>
        <h1>Puppy Bowl!</h1>
        <div className="container-input">
          <input type="text" placeholder="Search Here" onChange={handleChange}/>
        </div>
      </div>
    </>
  );
}

export default Header;
