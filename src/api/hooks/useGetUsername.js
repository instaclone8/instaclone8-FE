import { useQuery } from '@tanstack/react-query';
import { apis_token } from '../../axios/api';

export const useGetUsername = id => {
  console.log(id, "postId");

  const { data } = useQuery({
    queryKey: 'GET_USERNAME',
    queryFn: async () => {
      const data = await apis_token.get(`/api/user/username`);
      console.log(data);
      return data.data;
    },
  });
  return {
    username: data,
  };
};