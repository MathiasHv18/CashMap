import React, { useState } from "react";
import "./Home.css";

function Home() {
  return (
    <div className="Home_outerBox">
      <h1 className="Home_tittle">Expense analysis</h1>
      <div className="Home_inputBox">
        <h2 className="Home_subtittle">Insert your income </h2>
        <h4 className="Home_h4">Add your expenses for analysis</h4>
        <h3 className="Home_h3">Concept</h3>
        <input className="Home_input" type="text" />
        <h3 className="Home_h3">Amount</h3>
        <input className="Home_input" type="number" />
        <h3 className="Home_h3">Date</h3>
        <input className="Home_input" type="date" />
        <h3 className="Home_h3">Category</h3>
        <input className="Home_input" type="text" /> <br />
        <button>Add</button>
      </div>
      <div className="Home_history">
        <h2 className="Home_subtittle">History</h2>
      </div>
      <div className="Home_stats">
        <h2 className="Home_subtittle">Stats</h2>
      </div>
    </div>
  );
}

export default Home;
