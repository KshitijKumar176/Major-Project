import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

function Auth() {
  const [email, setEmail] = useState("");
  const [voterId, setVoterId] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const register = (e) => {
    e.preventDefault();

    dispatch({
      type: "SET_USER",
      payload: {
        name,
        email,
        voterId,
      },
    });

    console.log(name, email, voterId);

    navigate("/");
  };

  return (
    <div className="login">
      <div class="container" onclick="onclick">
        <div class="top"></div>
        <div class="bottom"></div>
        <div class="center">
          <h1 className="login__heading">Sign-In</h1>
          <form action="">
            <h5 className="login__label">E-Mail</h5>
            <input
              className="login__email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h5 className="login__label">Voter Id</h5>
            <input
              className="login__voterId"
              type="number"
              value={voterId}
              onChange={(e) => setVoterId(e.target.value)}
            />
            <h5 className="login__label">Full Name</h5>
            <input
              className="login__name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <button
              className="login__loginbutton"
              type="submit"
              onClick={register}
            >
              Login
            </button>
          </form>
          <h2>&nbsp;</h2>
        </div>
      </div>
    </div>
  );
}

export default Auth;
