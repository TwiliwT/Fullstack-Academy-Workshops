import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllPlayers } from "../API";
import { deletePlayer } from "../API";
import "./AllPlayers.css";

function AllPlayers({ setPlayers, players, searchInput, filterdPlayers }) {
  const navigate = useNavigate();

  useEffect(() => {
    async function callFetch() {
      setPlayers(await fetchAllPlayers());
    }
    callFetch();
  }, [players]);

  if (searchInput >= 0) {
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
                <button
                  onClick={() => {
                    deletePlayer(players.id);
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    navigate(`/Details/${players.id}`);
                  }}
                >
                  Details
                </button>
              </div>
            </div>
          );
        })}
      </>
    );
  } else {
    return (
      <>
        {Object.values(filterdPlayers).map((players) => {
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
                <button
                  onClick={() => {
                    deletePlayer(players.id);
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    navigate(`/Details/${players.id}`);
                  }}
                >
                  Details
                </button>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default AllPlayers;
