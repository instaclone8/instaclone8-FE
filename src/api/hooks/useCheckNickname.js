import { useMutation } from '@tanstack/react-query';
import apis from '../../axios/api';


function useCheckNickname() {
  const { mutate } = useMutation({
    mutationFn: async (checkedNickname) => {
      const response = await apis.post("/api/user/checkusername", checkedNickname)
      console.log(response);
      return response
    },
    onSuccess: () => {
      alert('사용 가능한 닉네임입니다.')
    }
  })

  return {
    checkNickname: mutate
  }
}

export default useCheckNickname