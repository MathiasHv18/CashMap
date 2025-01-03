import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import frasesLogin from "../../assets/frasesLogin.json";
import "./RegisterPage.css";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const randomMessage = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * frasesLogin.messages.length);
    return frasesLogin.messages[randomIndex];
  }, []);

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/");
  };

  const handlePrivacyPolicy = () => {
    navigate("/privacyPolicy");
  };

  const handleTermsOfService = () => {
    navigate("/TermsOfService");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!username || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
  };

  return (
    <div className="RegisterPage_outerBox">
      <form className="RegisterPage_registerCard" onSubmit={handleSubmit}>
        <h2 className="RegisterPage_title">{randomMessage}</h2>
        {error && <p className="RegisterPage_error">{error}</p>}
        <input
          type="text"
          className="RegisterPage_input"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          className="RegisterPage_input"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="RegisterPage_input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          className="RegisterPage_input"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit" className="RegisterPage_button">Register</button>
        <span className="RegisterPage_span">
          By clicking “Register” you agree that you have read CashMap’s 
          <a onClick={handlePrivacyPolicy}> Privacy Policy </a> 
          and have reviewed and agree to CashMap’s 
          <a onClick={handleTermsOfService}> Terms of Service.</a>
        </span>
        <span className="RegisterPage_span2">
          Already have an account? <a onClick={handleLoginClick}>Sign in</a>
        </span>
      </form>
    </div>
  );
}

export default RegisterPage;