import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import SinglePlayers from "./components/SinglePlayers";
import Header from "./components/Header";
import "./App.css";
import CreatePuppy from "./components/CreatePuppy";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={<AllPlayers />}
          />
          <Route path="/Details/:id" element={<SinglePlayers />} />
          <Route path="/CreatePuppy" element={<CreatePuppy />}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
