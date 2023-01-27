import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const onLogout = (e) => {
    e.preventDefault();

    dispatch({ type: "LOGOUT" });

    navigate("/");
  };

  return (
    <div className="header">
      <span className="home">
        <Link to="/">
          <button className="button home__button">HOME</button>
        </Link>
      </span>
      <span>Transparent Blockchain Electoral System</span>
      <span className="login" align="right">
        {!state.email ? (
          <Link to="/auth">
            <button className="button login__button">LOGIN</button>
          </Link>
        ) : (
          <Link to="/">
            <button className="button login__button" onClick={onLogout}>
              LOGOUT
            </button>
          </Link>
        )}
      </span>
    </div>
  );
}

export default Header;
