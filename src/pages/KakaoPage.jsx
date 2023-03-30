import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import apis from '../axios/api';
import Wrapper from "../components/common/Wrapper";
import { BsPlusCircleDotted } from "react-icons/bs"

function KakaoPage() {
  const navigate = useNavigate();

  const [kakaoCode, setKakaoCode] = useState();

  const { data, refetch } = useQuery(
    ["GET_COOKIE", kakaoCode],
    async () => {
      const response = await apis.get(
        `/api/user/kakao/callback?code=${kakaoCode}`
      );
      const token = response.headers.authorization;
      const cookies = new Cookies();
      cookies.set("token", token);
      return response;
    },
    { enabled: false }
  );

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    setKakaoCode(code);
  }, []);

  useEffect(() => {
    if (kakaoCode) {
      refetch().then(() => navigate("/main"));
    }
  }, [kakaoCode, refetch, navigate]);

  return (
    <Wrapper height={`100vh`} flex={`row`}>
      <img
        src="https://i.pinimg.com/236x/88/79/43/88794378c9e86a0b09932528de3c4ea1.jpg"
        alt="... 로딩중"
      />
      <BsPlusCircleDotted style={{ fontSize: `100px` }} />
      <img
        src="https://i.pinimg.com/236x/86/39/85/8639859040131440e24166acfe00dcb0.jpg"
        alt="... 로딩중"
      />
    </Wrapper>
  );
}

export default KakaoPage;
