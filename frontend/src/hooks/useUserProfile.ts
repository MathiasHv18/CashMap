import { useState } from "react";
import { User } from "../interfaces/UserProfileInterface";
import { getUserProfile } from "../api/userProfileApi";

const useUserProfile = () => {
  const [loadingU, setLoading] = useState(false);
  const [errorU, setError] = useState<string | null>(null);
  const [successU, setSuccess] = useState(false);
  const [responseU, setResponse] = useState<User | null>(null);

  const getUser = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const res = await getUserProfile();
      setResponse(res);
      setSuccess(true);
    } catch (err: any) {
      setError(err.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return { getUser, loadingU, errorU, successU, responseU };
};

export default useUserProfile;
