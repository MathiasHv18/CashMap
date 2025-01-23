import { useState } from "react";
import { registerUserRequest } from "../interfaces/registerUser";
import { registerUser } from "../api/userAuth";
import { registerUserResponse } from "../interfaces/registerUser";

const useRegisterUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [response, setResponse] = useState<registerUserResponse | null>(null); // Nuevo estado para almacenar la respuesta

  const registerUserCall = async (user: registerUserRequest) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const res = await registerUser(user); // Guardar la respuesta de la API
      setResponse(res);
      setSuccess(true);
    } catch (err: any) {
      setError(err.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return { registerUserCall, loading, error, success, response }; // Retorna la respuesta
};

export default useRegisterUser;
