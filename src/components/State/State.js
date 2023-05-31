import React from "react";
import { useState } from "react";
import "./State.css";

export default function State() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="usestate-container text-center">
              <div className="text-center">
                <h1>Count: {count}</h1>
              </div>
              <button
                className="btn btn-warning me-5"
                onClick={() => setCount(count + 1)}
              >
                Increment
              </button>
              <button
                className="btn btn-danger"
                onClick={() => setCount(count - 1)}
              >
                Decrement
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="usestate-container text-center">
              <div className="text-center">
                <h1>Count: {count}</h1>
              </div>
              <button
                className="btn btn-warning me-5"
                onClick={() => setCount(count + 1)}
              >
                Increment
              </button>
              <button
                className="btn btn-danger"
                onClick={() => setCount(count - 1)}
              >
                Decrement
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
