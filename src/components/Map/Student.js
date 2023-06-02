import React from "react";
import "./Student.css";

function Student(props) {
  return (
    <>
      <div className="student-container">Hello {props.name}</div>
    </>
  );
}

export default Student;
