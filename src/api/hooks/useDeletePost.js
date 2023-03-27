// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import axios from "axios";

// export const useDeletePost = () => {
//   const { mutate: deletePost, status } = useMutation({
//     mutationFn: async id => {
//       await axios.delete(`api_token/posts/${id}`);
//     },
//     onSuccess: () => {},
//   });

//   return {
//     deletePost,
//     status,
//   };
// };
