import "./LoginCard.css";
import frasesLogin from "../../assets/frasesLogin.json";

function LoginCard() {
  const randomIndex = Math.floor(Math.random() * frasesLogin.messages.length);
  return (
    <div className="loginCard">
      <h2>{frasesLogin.messages[randomIndex]}</h2>
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
