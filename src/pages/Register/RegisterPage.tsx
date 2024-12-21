import React from "react";
import "./RegisterPage.css";
import frasesLogin from "../../assets/frasesLogin.json";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const randomIndex = Math.floor(Math.random() * frasesLogin.messages.length);
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/");
  };

  return (
    <div className="outerBox">
      <div className="registerCard">
        <h2 className="tittle">{frasesLogin.messages[randomIndex]}</h2>

        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm password" />
        <button className="button">Register</button>
        <span>
          By clicking “Register” you agree that you have read CashMap’s Privacy
          Policy and have reviewed and agree to CashMap’s Terms of Service.
        </span>
        <span>
          Already have an account? <a onClick={handleLoginClick}>Sign in</a>
        </span>
      </div>
    </div>
  );
}

export default RegisterPage;
