import { keys } from "../utils/createQueryKey";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apis_token } from "../../axios/api";

export const useUpdatePost = ({ formData, id }) => {
  const queryClient = useQueryClient();

  const { mutate: updatePost } = useMutation(
    async ({ formData, id }) => {
      const { data } = await apis_token.patch(`api/posts/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: keys.GET_POSTS });
      },
    }

    //   {
    //   mutationFn: async ({ id, editPost }) => {
    //     await apis_token.patch(`api/posts/${id}`, editPost);
    //   },
    //   onSuccess: () => {
    //     queryClient.invalidateQueries(keys.GET_POSTS);
    //   },
    // }
  );

  return { updatePost };
};
