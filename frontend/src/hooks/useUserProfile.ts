import { useEffect, useState } from "react";
import { getUserProfile } from "../api/userProfileApi";
import { User } from "../interfaces/UserProfileInterface";

const useUserProfile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    setLoading(true);
    try {
      const data = await getUserProfile();
      setUser(data);
    } catch (err: any) {
      setError(err.response?.data?.message || "Error fetching user");
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    state: { loading, error },
    getUser,
  };
};

export default useUserProfile;
