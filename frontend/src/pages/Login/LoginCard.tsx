import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ResponsiveContainer, LineChart, Line } from "recharts";
import frasesLogin from "../../assets/frasesLogin.json";
import "./LoginCard.css";
import useSentences from "../../hooks/useSentences";

const LoginCard = () => {
  const { sentences, loading, error: fetchError } = useSentences();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const randomMessage = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * frasesLogin.messages.length);
    return frasesLogin.messages[randomIndex];
  }, []);

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
    console.log(sentences);
    navigate("/recoverPassword");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }
    setError("");
  };

  return (
    <div className="LoginCard_outerBox">
      <form className="LoginCard_loginCard" onSubmit={handleSubmit}>
        <h2 className="LoginCard_title">{randomMessage}</h2>
        <div className="LoginCard_chartContainer">
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
        {error && <p className="LoginCard_error">{error}</p>}
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="LoginCard_input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="LoginCard_input"
        />
        <button type="submit" className="LoginCard_button">
          Login
        </button>
        <span className="LoginCard_footer">
          <a onClick={handlePassword}> I forgot my password</a>
        </span>
        <span className="LoginCard_footer">
          Don't have an account?
          <a onClick={handleRegisterClick}> Register</a>
        </span>
      </form>
    </div>
  );
};

export default LoginCard;
