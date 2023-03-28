import { keys } from "../utils/createQueryKey";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apis_token } from "../../axios/api";

export const useUpdatePost = () => {
  const queryClient = useQueryClient();

  const { mutate: updatePost } = useMutation({
    mutationFn: async ({ id, newPost }) => {
      await apis_token.patch(`api/posts/${id}`, newPost);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(keys.GET_POSTS);
    },
  });

  return { useUpdatePost };
};
