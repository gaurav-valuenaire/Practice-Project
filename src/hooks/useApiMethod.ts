import { useState } from "react";

const useApiMethod = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const callApi = async (api: any) => {
    setLoading(true);
    try {
      const response = await api();
      setError(null);
      setLoading(false);
      return response;
    } catch (error) {
      setError("Some error");
      setLoading(false);
      throw error;
    }
  };

  return { callApi, loading, error };
};

export default useApiMethod;
