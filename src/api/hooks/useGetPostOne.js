import { useQuery } from "@tanstack/react-query";
import { keys } from "../utils/createQueryKey";
import { apis_token } from "./../../axios/api";

export const useGetPostOne = id => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: keys.GET_POST_ONE,
    queryFn: async () => {
      const data = await apis_token.get(`/api/posts/${id}`);
      return data.data;
    },
  });
  return {
    postOne: data,
    postOneIsLoading: isLoading,
    refetch,
  };
};
