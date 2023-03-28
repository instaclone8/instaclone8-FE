import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from "universal-cookie";
import Wrapper from '../components/common/Wrapper'


function KakaoPage() {
  const navigate = useNavigate();

  const [kakaoCode, setKakaoCode] = useState()

  const { data, refetch } = useQuery(
    ['GET_COOKIE', kakaoCode],
    async () => {
      console.log('kakaocode', kakaoCode);
      const response = await axios.get(`http://15.164.166.87:8080/api/user/kakao/callback?code=${kakaoCode}`)
      const token = response.headers.authorization;
      const cookies = new Cookies()
      cookies.set('token', token)
      return response
    },
    { enabled: false }
  )

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code')
    setKakaoCode(code)
  }, [])


  useEffect(() => {
    if (kakaoCode) {
      console.log('code 실행')
      refetch().then(() => navigate('/main'))
    }
  }, [kakaoCode, refetch, navigate])




  // const { mutate } = useMutation({
  //   mutationFn: async (payload) => {
  //     const response = await axios.get(`http://15.164.166.87:8080/api/user/kakao/callback?code=${payload}`)
  //     const token = response.headers.authorization;
  //     const cookies = new Cookies()
  //     cookies.set('token', token)
  //     return response
  //   }
  // })




  return (
    <Wrapper>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSwBaWDpA8UkXW71CnThivS3w6c2PxgyCWJw&usqp=CAU" alt="... 로딩중" />
    </Wrapper>
  )
}

export default KakaoPage