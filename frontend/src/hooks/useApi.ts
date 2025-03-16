import { useState } from "react";

interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  success: boolean;
}

const useApi = <T>() => {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    loading: false,
    error: null,
    success: false,
  });

  const fetchData = async (apiCall: () => Promise<T>) => {
    setState({ ...state, loading: true, error: null, success: false });
    try {
      const data = await apiCall();
      setState({ data, loading: false, error: null, success: true });
    } catch (error: any) {
      setState({
        data: null,
        loading: false,
        error: error.response?.data?.message || "An error occurred",
        success: false,
      });
    }
  };

  return { ...state, fetchData };
};

export default useApi;
