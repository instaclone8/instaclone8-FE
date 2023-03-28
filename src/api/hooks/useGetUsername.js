import { useQuery } from '@tanstack/react-query';
import { apis_token } from '../../axios/api';

export const useGetUsername = id => {
  console.log(id, "postId");

  const { data, isLoading } = useQuery({
    queryKey: 'GET_USERNAME',
    queryFn: async () => {
      const data = await apis_token.get(`/api/user/username`);
      return data.data;
    },
    onSuccess: () => {
      console.log('@@@@@@@@@@@@@@', data);
    },
    onError: () => {
      console.log('@@@@@@@@@@@@@@', data);
    }
  });
  return {
    username: data,
    usernameIsLoading: isLoading
  };
};