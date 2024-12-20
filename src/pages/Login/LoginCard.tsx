import "./LoginCard.css";
import frasesLogin from "../../assets/frasesLogin.json";
import { LineChart, Line, ResponsiveContainer } from 'recharts'

const data = [
  { expense: 1000 },
  { expense: 1200 },
  { expense: 900 },
  { expense: 1500 },
  { expense: 800 },
  { expense: 1100 },
  { expense: 1300 },
]

function LoginCard() {
  const randomIndex = Math.floor(Math.random() * frasesLogin.messages.length);
  return (
    <div className="loginCard">
      <h2>{frasesLogin.messages[randomIndex]}</h2>
      <div className="chartContainer">
        <ResponsiveContainer width="100%" height={100}>
          <LineChart data={data}>
            <Line type="monotone" dataKey="expense" stroke="#3b82f6" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button className="button">Login</button>
      <span>
        <a href="">I forgot my password</a>
      </span>
      <span>
        Don't have an account? <a href="">Register</a>
      </span>
    </div>
  );
}

export default LoginCard;
