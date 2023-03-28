import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apis_token } from "../../axios/api";
import { keys } from "../utils/createQueryKey";

export const useDeletePost = id => {
  const queryClient = useQueryClient();

  const { mutate: deletePost, status } = useMutation({
    mutationFn: async id => {
      await apis_token.delete(`api/posts/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: keys.GET_POSTS });
    },
  });

  return {
    deletePost,
    status,
  };
};
