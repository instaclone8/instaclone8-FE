import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function KakaoPage() {
  const navigation = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code')
    console.log(code);
    mutate(code)
  }, [])

  const { mutate } = useMutation({
    mutationFn: async (payload) => {
      const result = await axios.post('', { code: payload })
      console.log(result);
    },
    onSuccess: () => {
      window.alert('성공!')
    },
    onError: () => {

    }
  })


  return (
    <div>KakaoPage</div>
  )
}

export default KakaoPage