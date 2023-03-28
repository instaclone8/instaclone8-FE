import { useQuery } from '@tanstack/react-query';
import { apis_token } from '../../axios/api';

export const useGetUsername = id => {

  const { data, isLoading } = useQuery({
    queryKey: ['GET_USERNAME'],
    queryFn: async () => {
      const data = await apis_token.get(`/api/user/username`);
      return data.data;
    }
  });
  return {
    username: data,
    usernameIsLoading: isLoading
  };
};