import "./LoginCard.css";
import frasesLogin from "../../assets/frasesLogin.json";

function LoginCard() {
  const randomIndex = Math.floor(Math.random() * frasesLogin.messages.length);
  return (
    <div className="loginCard">
      <h2>{frasesLogin.messages[randomIndex]}</h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 50"
        className="loginWave"
      >
        <path
          d="M0 40 Q50 10 90 30 T200 10"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
        />
      </svg>
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
