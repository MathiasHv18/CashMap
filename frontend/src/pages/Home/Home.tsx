import React, { useState } from "react";
import "./Home.css";

function Home() {
  return (
    <div className="Home_outerBox">
      <h1 className="Home_tittle">Expense analysis</h1>
      <div className="Home_inputBox">
        <h2 className="Home_subtittle">Insert your income </h2>
        <h5 className="Home_h5">Add your expenses for analysis</h5>
        <h3 className="Home_h3">Concept</h3>
        <input className="Home_input" type="text" required />
        <h3 className="Home_h3">Amount</h3>
        <input className="Home_input" type="number" />
        <h3 className="Home_h3">Date</h3>
        <input className="Home_input" type="date" />
        <h3 className="Home_h3">Category</h3>
        <input className="Home_input" type="text" /> <br />
        <button className="Home_button">Add</button>
      </div>
      <div className="Home_historyBox">
        <h2 className="Home_subtittle">History</h2>
        <table className="Home_table">
          <thead>
            <tr>
              <th>Concept</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Example</td>
              <td>$100</td>
              <td>2025-01-01</td>
              <td>Food</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="Home_statsBox">
        <h2 className="Home_subtittle">Stats</h2>
      </div>
    </div>
  );
}

export default Home;
