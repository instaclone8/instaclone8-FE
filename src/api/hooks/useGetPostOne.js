import { useQuery } from "@tanstack/react-query";
import { keys } from "../utils/createQueryKey";
import { apis_token } from "./../../axios/api";

export const useGetPostOne = id => {
  console.log(id, "postId");

  const { data, isLoading } = useQuery({
    queryKey: keys.GET_POST_ONE,
    queryFn: async () => {
      //postCard에서 클릭하는 post의 postId를 넘겨줘야함
      const data = await apis_token.get(`/api/posts/${id}`);
      console.log(data, "detail.data");
      return data.data;
    },
  });
  return {
    postOne: data,
    postOneIsLoading: isLoading,
  };
};
