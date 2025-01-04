import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import frasesLogin from "../../assets/frasesLogin.json";
import TermsModal from "../terms/Terms&Privacy";
import "./RegisterPage.css";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  const randomMessage = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * frasesLogin.messages.length);
    return frasesLogin.messages[randomIndex];
  }, []);

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/");
  };

  const handlePrivacyPolicy = (e: React.MouseEvent) => {
    e.preventDefault();
    setModalType('privacy');
  };

  const handleTermsOfService = (e: React.MouseEvent) => {
    e.preventDefault();
    setModalType('terms');
  };

  const handleCloseModal = () => {
    setModalType(null);
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
          By clicking "Register" you agree that you have read CashMap's 
          <a href="#" onClick={handlePrivacyPolicy}> Privacy Policy </a> 
          and have reviewed and agree to CashMap's 
          <a href="#" onClick={handleTermsOfService}> Terms of Service.</a>
        </span>
        <span className="RegisterPage_span2">
          Already have an account? <a onClick={handleLoginClick}>Sign in</a>
        </span>
      </form>

      <TermsModal
        isOpen={modalType !== null}
        onClose={handleCloseModal}
        type={modalType || 'terms'}
      />
    </div>
  );
}

export default RegisterPage;