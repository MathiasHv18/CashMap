import { useState } from "react";
import { loginUserRequest } from "../interfaces/LoginUserInterface";
import { loginUserResponse } from "../interfaces/LoginUserInterface";
import { loginUser } from "../api/userAuthApi";

const useLoginUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [response, setResponse] = useState<loginUserResponse | null>(null);

  const loginUserCall = async (user: loginUserRequest) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const res = await loginUser(user);
      console.log("Login Response:", res);
      setResponse(res);
      setSuccess(true);
      localStorage.setItem("token", res.token);
    } catch (err: any) {
      setError(err.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return { loginUserCall, loading, error, success, response };
};

export default useLoginUser;
