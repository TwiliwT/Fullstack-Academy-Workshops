import { useState } from "react";
import "./SignUpForm.css";

export default function SignUpForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    if (username.length <= 7 && password.length <= 7) {
      setError("Username and password needs to be at least 8 characters long");
      setSuccessMessage(null);
    } else if (username.length <= 7) {
      setError("Username needs to be at least 8 characters long");
      setSuccessMessage(null);
    } else if (password.length <= 7) {
      setError("Password needs to be at least 8 characters long");
      setSuccessMessage(null);
    } else {
      setError(null);
      try {
        const response = await fetch(
          "https://fsa-jwt-practice.herokuapp.com/signup",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: username,
              password: password,
            }),
          }
        );
        const result = await response.json();
        setToken(result.token);
        setSuccessMessage("Success!");
        setUsername("");
        setPassword("");
        console.log(result);
      } catch (error) {
        setError(error.message);
      }
    }
  }

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      {setSuccessMessage && <p>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username:</p>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          <p>Password:</p>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button className="submit-button">Submit</button>
      </form>
    </div>
  );
}
