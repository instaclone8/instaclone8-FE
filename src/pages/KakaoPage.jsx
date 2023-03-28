import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function KakaoPage() {
  const navigation = useNavigate();

  // useEffect(() => {
  //   const code = new URL(window.location.href).searchParams.get('code')
  //   console.log(code);
  //   mutate(code)
  // }, [])

  // const { mutate } = useMutation({
  //   mutationFn: async (payload) => {
  //     const response = await axios.get(`http://43.201.98.79:8080/api/user/kakao/callback?code=${payload}`)
  //     console.log(response);
  //     return response
  //   },
  //   onSuccess: () => {
  //     window.alert('성공!')
  //   },
  //   onError: () => {

  //   }
  // })


  return (
    <div>KakaoPage</div>
  )
}

export default KakaoPage