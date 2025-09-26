import usePostData from "./usePostData";

interface LoginPayload {
    email: string;
    password: string;
}

const useLogin = () => usePostData<LoginPayload>("/auth/jwt/create/");
export default useLogin;
