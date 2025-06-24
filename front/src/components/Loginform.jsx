import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Loginform = () => {
  const [username, SetUsername] = useState(" ");
  const [password, SetPassword] = useState("");
  const nav = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    const loginUser = { username, password };
    axios
      .post("http://localhost:5005/auth/login", loginUser)
      .then((res) => {
        console.log("succesful login", res.data);
        localStorage.setItem("authToken", res.data.authToken);
        nav("/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <h1>Login</h1>
      <form className="loginform" onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => SetUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => SetPassword(e.target.value)}
          />
        </label>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Loginform;
