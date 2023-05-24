import { useState } from 'react';
import React from "react";
import "./Form.css";

export default function Form() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="form-container text-center">
            <h2 className="text-center">Registation form</h2>
            <form>
              <input
                type="text"
                class="form-control mt-4"
                id="exampleFormControlInput1"
                placeholder="enter your fullname"
                value={name} onChange={(e) => setName(e.target.value)}
              ></input>
              <br />
              
               <input
                type="email"
                class="form-control mt-2"
                id="exampleFormControlInput1"
                placeholder="enter your email"
                value={email} onChange={(e) => setEmail(e.target.value)}
              ></input>
              <br />

              <input
                type="phone"
                class="form-control mt-2"
                id="exampleFormControlInput1"
                placeholder="enter your phone"
                value={phone} onChange={(e) => setPhone(e.target.value)}
              ></input>
              <br />

              <div class="d-grid gap-2 col-6 mx-auto">
              <button class="btn btn-primary" type="button">Button</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
