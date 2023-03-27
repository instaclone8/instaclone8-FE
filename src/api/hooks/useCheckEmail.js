import { useMutation } from '@tanstack/react-query';
import apis from '../../axios/api';

function useCheckEmail() {
  const { mutate } = useMutation({
    mutationFn: async (email) => {
      const response = await apis.post('/api/user/checkemail', email)
      console.log(response);
      return response
    },
  })

  return {
    checkEmail: mutate
  }
}

export default useCheckEmail