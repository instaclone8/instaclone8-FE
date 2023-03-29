import axios from 'axios'
import { cookies } from '../shared/cookies'


const apis = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
})

export const apis_token = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
})

apis_token.interceptors.request.use(
  // 요청을 보내기 전 수행되는 함수
  function (config) {
    const token = cookies.get("token")
    config.headers["Authorization"] = `${token}`;
    return config
  },

  // 오류 요청을 보내기 전 수행되는 함수
  function (error) {
    return Promise.reject(error)
    // return error 가 아님 !! 꼭 프로미스.리젝트 여야만 함
  }
)

apis.interceptors.response.use(
  // 응답을 내보내기 전 수행되는 함수
  function (response) {
    return response
  },

  // 오류 응답을 내보내기 전 수행되는 함수
  function (error) {
    return Promise.reject(error)
  }
)

export default apis
