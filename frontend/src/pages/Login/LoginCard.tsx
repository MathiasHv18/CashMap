import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ResponsiveContainer, LineChart, Line } from "recharts";
import styles from "./LoginCard.module.css";
import useSentences from "../../hooks/useSentences";
import useLoginUser from "../../hooks/useLoginUser";
import { loginUserRequest } from "../../interfaces/LoginUserInterface";

const LoginCard = () => {
  const { sentences } = useSentences();
  const [mail, setmail] = useState("");
  const { loginUserCall, state: loginState } = useLoginUser();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const randomSentence = useMemo(() => {
    if (sentences.length > 0) {
      const randomIndex = Math.floor(Math.random() * sentences.length);
      return sentences[randomIndex];
    }
    return null;
  }, [sentences]);

  const data = [
    { expense: 1000 },
    { expense: 1200 },
    { expense: 900 },
    { expense: 1500 },
    { expense: 800 },
    { expense: 1100 },
    { expense: 1300 },
  ];

  const navigate = useNavigate();

  const handlePassword = () => {
    navigate("/recoverPassword");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!mail || !password) {
      setError("Both fields are required.");
      return;
    }
    setError("");

    const user: loginUserRequest = {
      mail,
      password,
    };

    try {
      await loginUserCall(user);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (loginState.success && loginState.response) {
      console.log(loginState.response);
      navigate("/mainPage");
    }
  }, [loginState.success, navigate]);

  return (
    <div className={styles.outerBox}>
      <form className={styles.loginCard} onSubmit={handleSubmit}>
        <h2 className={styles.title}>{randomSentence?.sentence}</h2>
        <div className={styles.chartContainer}>
          <ResponsiveContainer width="100%" height={100}>
            <LineChart data={data}>
              <Line
                type="monotone"
                dataKey="expense"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <input
          type="mail"
          placeholder="Email Address"
          value={mail}
          onChange={(e) => setmail(e.target.value)}
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Login
        </button>
        <span className={styles.footer}>
          <a onClick={handlePassword}> I forgot my password</a>
        </span>
        <span className={styles.footer}>
          Don't have an account?
          <a onClick={handleRegisterClick}> Register</a>
        </span>
      </form>
    </div>
  );
};

export default LoginCard;
