import { useMutation } from '@tanstack/react-query';
import apis from '../../axios/api';

function useCheckEmail() {
  const { mutate, error } = useMutation({
    mutationFn: async (email) => {
      const response = await apis.post('/api/user/checkemail', email)
      return response
    },
  })

  return {
    checkEmail: mutate,
    error,
  }
}

export default useCheckEmail