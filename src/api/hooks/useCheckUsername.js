import { useMutation } from '@tanstack/react-query';
import apis from '../../axios/api';


function useCheckUsername() {
  const { mutate } = useMutation({
    mutationFn: async (checkedUsername) => {
      const response = await apis.post("/api/user/checkusername", checkedUsername)
      console.log(response);
      return response
    },
    onSuccess: () => {
      alert('사용 가능한 닉네임입니다.')
    }
  })

  return {
    checkUsername: mutate
  }
}

export default useCheckUsername