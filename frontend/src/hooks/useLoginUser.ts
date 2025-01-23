import { useState } from "react";
import { loginUserRequest } from "../interfaces/loginUser";
import { loginUserResponse } from "../interfaces/loginUser";
import { loginUser } from "../api/userAuth";

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
            setResponse(res);
            setSuccess(true);
        } catch (err: any) {
            setError(err.response?.data?.message || "An error occurred");
        } finally {
            setLoading(false);
        }
    };

    return { loginUserCall, loading, error, success, response };
}

export default useLoginUser;