import { useState } from "react";

export default function Authenitcate({ token }) {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [username, setUsername] = useState(null);

  async function handleClick() {
    if (token) {
      try {
        const response = await fetch(
          "https://fsa-jwt-practice.herokuapp.com/authenticate",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const result = await response.json();
        setSuccessMessage(result.message);
        setUsername(result.data.username);
        setError(null);
        console.log(result);
      } catch (error) {
        setError(error.message);
      }
    } else {
      setError("Needs to be a valid token.");
    }
  }

  return (
    <div className="authenitcate-container">
      <h2>Authenitcate</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Authenticate Token</button>
      {username && <p>Username: {username}</p>}
    </div>
  );
}
