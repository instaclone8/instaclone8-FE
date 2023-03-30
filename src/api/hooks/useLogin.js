import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import apis from "../../axios/api";
import { cookies } from "../../shared/cookies";

function useLogin() {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: async userInfo => {
      const response = await apis.post("/api/user/login", userInfo);
      const token = response.headers.authorization;
      cookies.set("token", token);
      return response;
    },
    onSuccess: () => {
      navigate("/main");
    },
  });

  return {
    login: mutate,
  };
}

export default useLogin;
