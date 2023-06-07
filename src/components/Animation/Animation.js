import React from "react";
import "./Animation.css";

export default function Animation() {
  return (
    <>
      <h1 className="text-center animation-car">Car Running Animation</h1>

      <div class="car-container">
        <img
          class="car-img"
          src="https://cdn.lowgif.com/full/8f5a48839e61c7c7-race-car-animated-free-download-best-race-car-animated.gif"
          alt=""
        />
      </div>
      <button className="animation-button">Animation Button</button>
    </>
  );
}
