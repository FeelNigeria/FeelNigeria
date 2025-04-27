import apiClient from "../services/api-clients";
import { AxiosRequestConfig, CanceledError } from "axios";
import { useState } from "react";

const usePostData = <T>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const createData = async (payload: T, requestConfig?: AxiosRequestConfig) => {
    const abortController = new AbortController();

    setLoading(true);
    try {
      const res = await apiClient.post<T>(endpoint, payload, {
        signal: abortController.signal,
        ...requestConfig,
      });
      setData(res.data);
    } catch (err) {
      if (err instanceof CanceledError) return;
      console.error("Error:", err);
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }

    return () => abortController.abort();
  };

  return {
    data,
    error,
    isLoading,
    createData,
  };
};

export default usePostData;
