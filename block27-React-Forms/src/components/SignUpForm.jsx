import { useState } from "react";

export default function SignUpForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    if (username.length <= 7 && password.length <= 7) {
      setError("Username and password needs to be at least 8 characters long");
    } else if (username.length <= 7) {
      setError("Username needs to be at least 8 characters long");
    } else if (password.length <= 7) {
      setError("Password needs to be at least 8 characters long");
    } else {
      setError(null)
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
        console.log(result);
      } catch (error) {
        setError(error.message);
      }
    }
  }

  return (
    <>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:{" "}
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button>Submit</button>
      </form>
    </>
  );
}
