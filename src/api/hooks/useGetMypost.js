import { useQuery } from "@tanstack/react-query";
import { keys } from "../utils/createQueryKey";
import { apis_token } from "./../../axios/api";

export const useGetMypost = (username) => {
  const { data } = useQuery({
    queryKey: keys.GET_MYPOST,
    queryFn: async () => {
      const data = await apis_token.get(`api/user/mypage/${username}`);
      console.log(data, "posts");
      return data.data;
    },
  });

  return {
    myPost: data,
  };
};
