import React from "react";

import Chocolate from "./Chocolate";

export default function Props() {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="app-header text-center mt-3">Chocolate App 💙</h1>
          <Chocolate title="Kharbuj" description="Khabuj is fruit" />
          <Chocolate title="Dairy Milk" description="dairy milk is sweet" />
          <Chocolate title="Perk" description="perk is chocolate" />
          <Chocolate title="Anand" description="Anand is a boy" />
        </div>
      </div>
    </>
  );
}
