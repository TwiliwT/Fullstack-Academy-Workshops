import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import SinglePlayers from "./components/SinglePlayers";
import Header from "./components/Header";
import "./App.css";
import CreatePuppy from "./components/CreatePuppy";

function App() {
  const [players, setPlayers] = useState([]);
  const [filterdPlayers, setFilterdPlayers] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <header>
        <Header
          players={players}
          setSearchInput={setSearchInput}
          setFilterdPlayers={setFilterdPlayers}
        />
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <AllPlayers
                players={players}
                setPlayers={setPlayers}
                searchInput={searchInput}
                filterdPlayers={filterdPlayers}
              />
            }
          />
          <Route path="/Details/:id" element={<SinglePlayers />} />
          <Route path="/CreatePuppy" element={<CreatePuppy />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
