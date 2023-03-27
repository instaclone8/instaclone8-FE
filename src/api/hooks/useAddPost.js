// import { keys } from "@/utils/createQueryKey";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import axios from "axios";

// export const useAddPost = () => {
//   const queryClient = useQueryClient();

//   const { mutate, isLoading, isSuccess } = useMutation({
//     mutationFn: async payload => {
//       const { data } = await axios.post(
//         `api_token/posts/${payload.id}`,
//         payload
//       );
//       return data;
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: keys.GET_POSTS }); // GET 요청을 다시함
//     },
//   });

//   return {
//     addPost: mutate,
//     addPostIsLoading: isLoading,
//   };
// };
