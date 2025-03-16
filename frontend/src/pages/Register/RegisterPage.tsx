import React, { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TermsModal from "../terms/Terms&Privacy";
import styles from "./RegisterPage.module.css";
import useSentences from "../../hooks/useSentences";
import useRegisterUser from "../../hooks/useRegisterUser";
import { registerUserRequest } from "../../interfaces/RegisterUserInterface";
import { registerUserResponse } from "../../interfaces/RegisterUserInterface";

function RegisterPage() {
  const { sentences, loading, error: fetchError } = useSentences();
  const {
    registerUserCall,
    loading: loadingRegister,
    error: registerError,
    success,
    response: registerUserResponse,
  } = useRegisterUser();
  const [name, setname] = useState("");
  const [mail, setmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [modalType, setModalType] = useState<"privacy" | "terms" | null>(null);
  const randomSentence = useMemo(() => {
    if (sentences.length > 0) {
      const randomIndex = Math.floor(Math.random() * sentences.length);
      return sentences[randomIndex];
    }
    return null;
  }, [sentences]);

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/");
  };

  const handlePrivacyPolicy = (e: React.MouseEvent) => {
    e.preventDefault();
    setModalType("privacy");
  };

  const handleTermsOfService = (e: React.MouseEvent) => {
    e.preventDefault();
    setModalType("terms");
  };

  const handleCloseModal = () => {
    setModalType(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !mail || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");

    const user: registerUserRequest = {
      name,
      mail,
      password,
      lastname: "",
    };

    try {
      await registerUserCall(user);
    } catch (err) {
      setError("An error occurred");
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(registerUserResponse);
    if (success) {
      navigate("/");
    }
  }, [success, navigate]);

  return (
    <div className={styles.outerBox}>
      <form className={styles.registerCard} onSubmit={handleSubmit}>
        <h2 className={styles.title}>{randomSentence?.sentence}</h2>
        {error && <p className={styles.error}>{error}</p>}
        <input
          type="text"
          className={styles.input}
          placeholder="Name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <input
          type="Email"
          className={styles.input}
          placeholder="Email Address"
          value={mail}
          onChange={(e) => setmail(e.target.value)}
        />
        <input
          type="password"
          className={styles.input}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          className={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit" className={styles.button}>
          Register
        </button>
        <span className={styles.span}>
          By clicking "Register" you agree that you have read CashMap's
          <a href="#" onClick={handlePrivacyPolicy}>
            {" "}
            Privacy Policy{" "}
          </a>
          and have reviewed and agree to CashMap's
          <a href="#" onClick={handleTermsOfService}>
            {" "}
            Terms of Service.
          </a>
        </span>
        <span className={styles.span2}>
          Already have an account? <a onClick={handleLoginClick}>Sign in</a>
        </span>
      </form>

      <TermsModal
        isOpen={modalType !== null}
        onClose={handleCloseModal}
        type={modalType || "terms"}
      />
    </div>
  );
}

export default RegisterPage;
