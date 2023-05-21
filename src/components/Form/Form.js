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
                class="form-control mt-2"
                id="exampleFormControlInput1"
                placeholder="enter your fullname"
              ></input>
              <br />
              
               <input
                type="email"
                class="form-control mt-2"
                id="exampleFormControlInput1"
                placeholder="enter your email"
              ></input>
              <br />

              <input
                type="phone"
                class="form-control mt-2"
                id="exampleFormControlInput1"
                placeholder="enter your phone"
              ></input>
              <br />

              <button type="submit" class="btn btn-warning mt-3">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
