function LoginCard() {
  const message = "Hola";
  return (
    <div className="loginCard">
      <h2>{message}</h2>
      <input type="text" />
      <input type="text" />
      <button>Login</button>
      <h3>I forgot my password</h3>
      <h3>Don't have an account?</h3> <a href="">Register</a>
    </div>
  );
}

export default LoginCard;
