import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from "universal-cookie";
import Wrapper from '../components/common/Wrapper'
import styled from 'styled-components'


function KakaoPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code')
    console.log(code);
    mutate(code, {
      onSuccess: () => {
        navigate('/main')
      }
    })
  }, [])

  const { mutate } = useMutation({
    mutationFn: async (payload) => {
      const response = await axios.get(`http://43.201.98.79:8080/api/user/kakao/callback?code=${payload}`)
      const token = response.headers.authorization;
      const cookies = new Cookies()
      cookies.set('token', token)
      return response
    }
  })


  return (
    <Wrapper width={`100vw`}>
      <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSwBaWDpA8UkXW71CnThivS3w6c2PxgyCWJw&usqp=CAU" alt="... 로딩중" />
    </Wrapper>
  )
}

const Img = styled.img`
  width: 70%;
  height: 70%;
`

export default KakaoPage