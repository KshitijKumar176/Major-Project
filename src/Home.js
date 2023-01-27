import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const state = useSelector((state) => state);

  console.log(state);

  return (
    <div>
      {state.email === "" && (
        <>
          <h1 className="home__heading">
            WELCOME TO ELECTIONS!
            <br />
          </h1>
          <h3>LOGIN TO CONTINUE</h3>
        </>
      )}
      {state.email && (
        <>
          <div class="container">
            <div class="card">
              <div class="box">
                <div class="content">
                  {/* <h2>03</h2> */}
                  <p className="home__text email">Email : {state.email}</p>
                  {/* <h3>Card Three</h3> */}
                  <h3 className="home__text name">Name : {state.name}</h3>
                  {/* <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore, totam velit? Iure nemo labore inventore?
                  </p> */}
                  <p className="home__text voterId">
                    VoterId : {state.voterId}
                  </p>
                  {/* <a href="#">Read More</a> */}
                  {state.voted ? (
                    <p className="vote__status">ALREADY VOTED!</p>
                  ) : (
                    <Link to="/form" className="button__text">
                      <button className="vote__button">
                        <div>VOTE HERE!</div>
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
