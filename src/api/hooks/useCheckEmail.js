import { useMutation } from '@tanstack/react-query';
import apis from '../../axios/api';

function useCheckEmail() {
  const { mutate } = useMutation({
    mutationFn: async (email) => {
      const response = await apis.post('/api/user/checkemail', email)
      console.log(response);
      return response
    },
    onSuccess: () => {
      alert('사용 가능한 아이디입니다.')
    },
    onError: (error) => {
      alert(error.response.data.message);
    }
  })

  return {
    checkEmail: mutate
  }
}

export default useCheckEmail