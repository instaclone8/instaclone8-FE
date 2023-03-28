import { keys } from "../utils/createQueryKey";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apis_token } from "../../axios/api";

export const useAddPost = payload => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: async payload => {
      //   console.log(formData, "payload");
      const { data } = await apis_token.post(
        "api/posts/",
        payload
        //   {headers: {"Content-Type": "multipart/form-data",}}
      );
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: keys.GET_POSTS });
    },
  });

  return {
    addPost: mutate,
    addPostIsLoading: isLoading,
  };
};
