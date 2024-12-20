import "./LoginCard.css";

interface LoginProps {
  message: string;
}

function LoginCard(props: LoginProps) {
  const { message } = props;
  return (
    <div className="loginCard">
      <h2>{message}</h2>
      <input type="text" />
      <input type="password" />
      <button className="button">Login</button>
      <h3>I forgot my password</h3>
      <h3>Don't have an account?</h3> <a href="">Register</a>
    </div>
  );
}

export default LoginCard;
