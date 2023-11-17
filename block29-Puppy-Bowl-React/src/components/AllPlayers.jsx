import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllPlayers } from "../API";
import "./AllPlayers.css";

function AllPlayers({ setSelectedPlayerId }) {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function callFetch() {
      setPlayers(await fetchAllPlayers());
    }
    callFetch();
  }, []);

  return (
    <>
      {Object.values(players).map((players) => {
        return (
          <div className="puppy-container" key={players.id}>
            <p>{players.name}</p>
            <img
              className="puppy-image"
              src={`${players.imageUrl}`}
              alt="Image of a Puppy"
            />
            <p>{players.breed}</p>
            <div>
              <button>Delete</button>
              <Link key={players.id} to={`/Details/${players.id}`}>
                <button
                  onClick={() => {
                    setSelectedPlayerId(players.id);
                  }}
                >
                  Details
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default AllPlayers;
