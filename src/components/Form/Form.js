import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <>
      <div className="container">
        <div className="row">
        <div className="form-container text-center">
          <h2 className="text-center">Registation form</h2>
          <form>
            <input
              type="text"
              placeholder="enter your fullname"
              className="mt-2"
            />
            <br />

            <input
              type="email"
              placeholder="enter your email"
              className="mt-2"
            />
            <br />

            <input
              type="phone"
              placeholder="enter your phone number"
              className="mt-2"
            />
            <br />

            <button type="submit" className="mt-3">
              Submit
            </button>
          </form>
        </div>
      </div>
      </div>
    </>
  );
}
