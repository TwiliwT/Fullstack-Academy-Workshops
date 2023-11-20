import { postPuppy } from "../API";
import { useState } from "react";
import "./CreatePuppy.css";

function CreatePuppy() {
  const [name, setName] = useState(null);
  const [breed, setBreed] = useState(null);
  const [status, setStatus] = useState(null);
  const [teamId, setTeamId] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (name == null || breed == null || status == null || teamId == null) {
      setError("Please fill in all required fields");
    } else if (name == "" || breed == "" || status == "" || teamId == "") {
      setError("Please fill in all required fields");
    } else if (isNaN(teamId)) {
      setError("TeamId: Needs to be a number");
    } else if (imageUrl == null) {
      postPuppy(name, breed, status, teamId);
      setError(null);
    } else {
      postPuppy(name, breed, status, teamId, imageUrl);
      setError(null);
    }

    //I could not figure out why this was not working so i did not include it.
    // } else if (status != "bench" || status != "field") {
    //   setError("Status: Needs to be either 'bench' or 'field'");
    // }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {error && <p className="error-text">{error}</p>}
        <label>
          <span>Name: </span>
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <label>
          <span>Breed: </span>
          <input
            type="text"
            onChange={(e) => {
              setBreed(e.target.value);
            }}
          />
        </label>
        <label>
          <span>Status: </span>
          <input
            type="text"
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          />
        </label>
        <label>
          <span>TeamId: </span>
          <input
            type="text"
            onChange={(e) => {
              setTeamId(e.target.value);
            }}
          />
        </label>
        <label>
          <span>(Optional) </span>
          <span>ImageURL: </span>
          <input
            type="text"
            onChange={(e) => {
              setImageUrl(e.target.value);
            }}
          />
        </label>
        <button className="submit-button">Submit</button>
      </form>
    </>
  );
}

export default CreatePuppy;
