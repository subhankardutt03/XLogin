import React from "react";
import { useState } from "react";

const Login = () => {
  let [userName, setUserName] = useState("");
  let [password, setPassword] = useState("");
  let [success, setSuccess] = useState(false);
  let [toggle, setToggle] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "username") {
      setUserName(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateInput(userName, password)) return;

    if (userName !== "user" && password !== "password") {
      setSuccess(true);
    }

    if (userName === "user" && password === "password") {
      setToggle(true);
    }
  };

  const validateInput = (user, password) => {
    if (user.trim === "" || user === undefined) {
      return false;
    }
    if (password.trim === "" || password === undefined) {
      return false;
    }
    return true;
  };

  return (
    <div>
      <h1>Login Page</h1>
      {toggle ? (
        <p>Welcome, user!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          {success && <p>Invalid username or password</p>}
          <label>Username:</label>
          <input
            type="text"
            value={userName}
            name="username"
            onChange={(e) => handleChange(e)}
            required
          />
          <br />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => handleChange(e)}
            required
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Login;
