import apiClient from "../services/api-clients";
import { AxiosRequestConfig, CanceledError } from "axios";
import { useState } from "react";
import { FormValues } from "@/components/ChakraFormField";

interface PostResponse<T> {
  data: T;
}

const usePost = <T>() => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const postData = async (
    endpoint: string,
    payload: any,
    requestConfig?: AxiosRequestConfig
  ) => {
    const abortController = new AbortController();

    setLoading(true);
    try {
      const res = await apiClient.post<PostResponse<T>>(endpoint, payload, {
        signal: abortController.signal,
        ...requestConfig,
      });
      setData(res.data.data);
    } catch (err) {
      if (err instanceof CanceledError) return;
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }

    return () => abortController.abort();
  };

  return { data, error, isLoading, postData };
};

const usePostData = <T>(endpoint: string) => {
  const { data, error, isLoading, postData } = usePost<FormValues>();

  const createData = async (payload: T) => {
    await postData(endpoint, payload);
  };

  return {
    data,
    error,
    isLoading,
    createData,
  };
};

export default usePostData;
