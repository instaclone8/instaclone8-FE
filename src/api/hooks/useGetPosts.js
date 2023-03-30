import { useQuery } from "@tanstack/react-query";
import { keys } from "../utils/createQueryKey";
import { apis_token } from "./../../axios/api";

export const useGetPosts = () => {
  const { data, isLoading } = useQuery({
    queryKey: keys.GET_POSTS, //posts get요청 key
    queryFn: async () => {
      const data = await apis_token.get("/api/posts");
      return data.data;
    },
  });

  return {
    posts: data,
    postsIsLoading: isLoading,
  };
};
