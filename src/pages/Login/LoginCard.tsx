import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ResponsiveContainer, LineChart, Line } from 'recharts';
import frasesLogin from "../../assets/frasesLogin.json";
import './LoginCard.css';

const LoginCard = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const randomMessage = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * frasesLogin.messages.length);
    return frasesLogin.messages[randomIndex];
  }, []);

  const data = [
    { expense: 400 },
    { expense: 300 },
    { expense: 600 },
    { expense: 200 },
    { expense: 500 },
  ];

  const navigate = useNavigate();

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
    <div className="outerBox">
      <form className="loginCard" onSubmit={handleSubmit}>
        <h2 className="title">{randomMessage}</h2>
        <div className="chartContainer">
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
        {error && <p className="error">{error}</p>}
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="button">Login</button>
        <span>
          Don't have an account? 
          <a onClick={handleRegisterClick}> Register here</a>
        </span>
      </form>
    </div>
  );
}

export default LoginCard;