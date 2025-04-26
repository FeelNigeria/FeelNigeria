import usePostData from "./usePostData";

interface LoginPayload {
    username: string;
    password: string;
}

const useLogin = () => usePostData<LoginPayload>("/auth/jwt/create/");
export default useLogin;
