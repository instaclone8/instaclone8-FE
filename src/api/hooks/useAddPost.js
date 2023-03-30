import { keys } from "../utils/createQueryKey";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apis_token } from "../../axios/api";

export const useAddPost = formData => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(
    async formData => {
      const { data } = await apis_token.post("api/posts", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: keys.GET_POSTS });
        queryClient.invalidateQueries({ queryKey: keys.GET_MYPOST });
      },
    }
  );

  return {
    addPost: mutate,
    addPostIsLoading: isLoading,
  };
};
