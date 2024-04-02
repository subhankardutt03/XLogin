import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [isLogin, setIsLogin] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData.username);
    console.log(formData.password);
    let username = formData.username;
    let password = formData.password;
    if (username.trim() === "user" && password.trim() === "password") {
      setIsLogin(!isLogin);
    } else {
      setIsError(!isError);
    }
  };
  return (
    <div>
      <h1>Login Page</h1>
      {isLogin ? (
        <p>Welcome user!</p>
      ) : (
        <div>
          {isError && <p>Invalid username or password</p>}
          <form onSubmit={handleSubmit}>
            <label htmlFor="">Username:</label>
            <input
              type="text"
              onChange={handleChange}
              placeholder="username"
              name="username"
              required
            />
            <br />
            <label htmlFor="">Password:</label>
            <input
              type="password"
              onChange={handleChange}
              placeholder="password"
              name="password"
              required
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
