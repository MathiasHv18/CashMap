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
    <div className="RegisterPage_outerBox">
      <div className="RegisterPage_registerCard">
        <h2 className="RegisterPage_title">{frasesLogin.messages[randomIndex]}</h2>

        <input type="text" className="RegisterPage_input" placeholder="Username" />
        <input type="text" className="RegisterPage_input" placeholder="Email Address" />
        <input type="password" className="RegisterPage_input" placeholder="Password" />
        <input type="password" className="RegisterPage_input" placeholder="Confirm password" />
        <button className="RegisterPage_button">Register</button>
        <span className="RegisterPage_span">
          By clicking “Register” you agree that you have read CashMap’s Privacy
          Policy and have reviewed and agree to CashMap’s Terms of Service.
        </span>
        <span className="RegisterPage_span">
          Already have an account? <a onClick={handleLoginClick}>Sign in</a>
        </span>
      </div>
    </div>
  );
}

export default RegisterPage;