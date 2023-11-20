import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchSinglePlayer } from "../API";
import "./SinglePlayer.css";

function SinglePlayers() {
  const [player, setPlayer] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    async function fetchPlayer() {
      setPlayer(await fetchSinglePlayer(id));
      console.log(player);
    }
    fetchPlayer();
  }, []);
  return (
    <>
      {player && (
        <div className="single-puppy-container">
          <p className="single-puppy-name">{player?.name}</p>
          <img
            className="single-puppy-img"
            src={`${player?.imageUrl}`}
            alt=""
          />
          <p className="single-puppy-breed">{player?.breed}</p>
          <p className="single-puppy-team">Team: {player?.teamId}</p>
          <p className="single-puppy-status">Status: {player?.status}</p>
          <Link to="/">
            <button className="back-button">Back</button>
          </Link>
        </div>
      )}
    </>
  );
}

export default SinglePlayers;
