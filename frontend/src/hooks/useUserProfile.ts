import useApi from "./useApi";
import { getUserProfile } from "../api/userProfileApi";
import { User } from "../interfaces/UserProfileInterface";

const useUserProfile = () => {
  const { data: user, loading, error, success, fetchData } = useApi<User>();

  const getUser = () => fetchData(getUserProfile);

  return { getUser, user, loading, error, success };
};

export default useUserProfile;
