import { useState } from "react";
import { registerUserRequest } from "../interfaces/RegisterUserInterface";
import { registerUser } from "../api/userAuthApi";
import { registerUserResponse } from "../interfaces/RegisterUserInterface";

const useRegisterUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [response, setResponse] = useState<registerUserResponse | null>(null); 

  const registerUserCall = async (user: registerUserRequest) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const res = await registerUser(user); 
      setResponse(res);
      setSuccess(true);
    } catch (err: any) {
      setError(err.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return { registerUserCall, state : {loading, error, success, response}}; 
};

export default useRegisterUser;
