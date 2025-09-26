import { useState } from "react";
import axios, { AxiosRequestConfig } from "axios";

const useApiClient = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const apiClient = async <T>(url: string, config?: AxiosRequestConfig): Promise<T | null> => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios(url, config);
      setLoading(false);
      return response.data;
    } catch (err: any) {
      setLoading(false);
      setError(err.message || "An error occurred");
      console.error("API Error:", err);
      return null;
    }
  };

  return { apiClient, loading, error };
};

export default useApiClient;