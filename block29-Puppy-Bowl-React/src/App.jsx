import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import SinglePlayers from "./components/SinglePlayers";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [selectedPlayerId, setSelectedPlayerId] = useState("");

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={<AllPlayers setSelectedPlayerId={setSelectedPlayerId} />}
          />
          <Route path="/Details/:id" element={<SinglePlayers />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
