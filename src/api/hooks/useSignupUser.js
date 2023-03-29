import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import apis from "../../axios/api";

export function useSignupUser() {
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: async payload => {
      const { data } = await apis.post("/api/user/signup", payload);
      return data;
    },
    onSuccess: () => {
      alert("회원가입이 완료되었습니다.");
      navigate("/");
    },
  });

  return {
    signup: mutate,
  };
}
