// import { keys } from "@/utils/createQueryKey";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import axios from "axios";

// export const useUpdatePost = () => {
//   const queryClient = useQueryClient();

//   const { mutate: updatePost } = useMutation({
//     mutationFn: async ({ id, newPost }) => {
//       await axios.patch(`api_token/posts`, newPost);
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries(keys.GET_POSTS);
//     },
//   });

//   return { useUpdatePost };
// };
