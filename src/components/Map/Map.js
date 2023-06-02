import React from "react";
import Student from "./Student";

export default function Map() {
  const students = ["Anand", "Kajal", "Kanchan", "Ujwal"];
  return (
    <>
      <h1 className="text-center">Map Function</h1>
      <div className="container mt-4">
      {students.map((stud) => {
        return <Student name={stud} />;
      })}
      </div>
    </>
  );
}
