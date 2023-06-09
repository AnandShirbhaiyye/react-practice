import { useState } from 'react';
import React from "react";
import "./Form.css";

export default function Form() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
     e.preventDefault();
     console.log(`Name: ${name}, Email: ${email}, Phone:${phone}, Password:${password}`);
     alert("Registration Successfully...")
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="form-container text-center">
            <h2 className="text-center">Registation form</h2>
            <form onSubmit={handleSubmit}>
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

              <input
                type="password"
                class="form-control mt-2"
                id="exampleFormControlInput1"
                placeholder="enter your password"
                value={password} onChange={(e) => setPassword(e.target.value)}
              ></input>
              <br />

              <div class="d-grid gap-2 col-6 mx-auto mt-2">
              <button class="btn btn-primary" type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
