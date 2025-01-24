import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ResponsiveContainer, LineChart, Line } from "recharts";
import "./LoginCard.css";
import useSentences from "../../hooks/useSentences";
import useLoginUser from "../../hooks/useLoginUser";
import { loginUserRequest } from "../../interfaces/loginUser";

const LoginCard = () => {
  const { sentences, loading, error: fetchError } = useSentences();
  const [mail, setmail] = useState("");
  const {
    loginUserCall,
    loading: loadingLogin,
    error: loginError,
    success,
    response: loginUserResponse,
  } = useLoginUser();
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
    if (success && loginUserResponse) {
      console.log(loginUserResponse);
      localStorage.setItem("token", loginUserResponse.token); // Guardar el token
      navigate("/mainPage");
    }
  }, [success, navigate]);

  return (
    <div className="LoginCard_outerBox">
      <form className="LoginCard_loginCard" onSubmit={handleSubmit}>
        <h2 className="LoginCard_title">{randomSentence?.sentence}</h2>
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
          type="mail"
          placeholder="Email Address"
          value={mail}
          onChange={(e) => setmail(e.target.value)}
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
