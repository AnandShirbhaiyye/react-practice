import React from "react";
import Student from "./Student";

export default function Map() {
  const students = ["Anand", "Kajal", "Kanchan", "Ujwal"];
  return (
    <>
      <h1 className="text-center">Map</h1>
      {students.map((stud) => {
        return <Student name={stud} />;
      })}
    </>
  );
}
