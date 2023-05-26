import React from "react";
import { useState, useEffect } from "react";
import "./Score.css";

export default function Score() {
  const [teamA, setTeamA] = useState(0);
  const [teamB, setTeamB] = useState(0);

  useEffect(() => {
    if (teamA) {
      localStorage.setItem("TeamA", teamA);
    }
    if (teamB) {
      localStorage.setItem("TeamB", teamB);
    }
  }, [teamA, teamB]);

  useEffect(() => {
    setTeamA(parseInt(localStorage.getItem("TeamA")) || 0);
    setTeamB(parseInt(localStorage.getItem("TeamB")) || 0);
  }, []);

  return (
    <>
      <h1 className="heading-title">WELCOME TO BASKETBALL TOURNAMENT🏀 </h1>
      <div className="container">
        <h1 className="score">SCORE BOARD🔲</h1>
        <div className="score-container">
          <div>
            <h1>TEAM A 🧔🏽‍♂</h1>
            <h2 className="counter">{teamA}</h2>
            <button
              className="team-button"
              onClick={() => {
                setTeamA(teamA + 1);
              }}
            >
              +
            </button>
            &nbsp;&nbsp;&nbsp;
            <button
              className="team-button"
              onClick={() => {
                if (teamA === 0) {
                  alert("Score cant be negative");
                } else {
                  setTeamA(teamA - 1);
                }
              }}
            >
              -
            </button>
          </div>

          <div>
            <h1>TEAM B 👨🏻‍🦱</h1>
            <h2 className="counter">{teamB}</h2>
            <button
              className="team-button"
              onClick={() => {
                setTeamB(teamB + 1);
              }}
            >
              +
            </button>
            &nbsp;&nbsp;&nbsp;
            <button
              className="team-button"
              onClick={() => {
                if (teamB === 0) {
                  alert("Score cant be negative");
                } else {
                  setTeamB(teamB - 1);
                }
              }}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
