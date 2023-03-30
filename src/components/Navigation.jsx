import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ModalBlackBg from "./ModalBlackBg";
import PostWrite from "./PostWrite";
import { useGetUsername } from "../api/hooks/useGetUsername";
import { HiHome } from "react-icons/hi";
import { BiLogOut } from "react-icons/bi";
import { CgAddR, CgProfile } from "react-icons/cg";
import mainlogo from "../img/instagram-font.png";
import Cookies from 'universal-cookie';


function Navigation({ openModal, setOpenModal }) {
  const { username } = useGetUsername();
  const navigate = useNavigate();

  //모달 open 관리
  const PostWriteModalOpenHandler = () => {
    setOpenModal(true);
  };

  const clickLogoutBtnHandler = () => {
    if (window.confirm("로그아웃하시겠습니까?")) {
      const cookies = new Cookies()
      cookies.remove('token')
      navigate('/')
    }
  }

  return (
    <>
      <StHeader>
        <div>
          <img src={mainlogo} alt="mainlogo" width="150px" />
        </div>
        <StLink to={"/main"}>
          <HiHome size="30" />홈
        </StLink>

        {/* 새 글 작성 모달 여는 버튼 */}
        <StAddDiv onClick={PostWriteModalOpenHandler}>
          <CgAddR size="30" />
          만들기
        </StAddDiv>

        <StProfileDiv onClick={() => navigate(`/mypage/${username?.username}`)}>
          <CgProfile size="30" />
          프로필
        </StProfileDiv>

        <StProfileDiv onClick={clickLogoutBtnHandler}>
          <BiLogOut size="30" />
          로그아웃
        </StProfileDiv>
      </StHeader>
      {/* PostWrite 컴포넌트에 posts.id 넘겨줄 것 */}
      {openModal && <PostWrite setOpenModal={setOpenModal} />}
      {/* 모달 열림과 동시에 어두운 백그라운드 넣어주고 어두운 부분 클릭시 모달 닫힘 */}
      {openModal && <ModalBlackBg setOpenModal={setOpenModal} />}
    </>
  );
}

const StHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px;
  border-right: 1px solid #cacaca98;

  position: fixed;
  width: 18%;
  height: 100vh;

  font-size: 18px;

  color: #000000df;
`;

const StLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 15px;
  padding-left: 10px;

  color: inherit;
  text-decoration: none;
`;

const StAddDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding-left: 10px;
  cursor: pointer;
`;

const StProfileDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding-left: 10px;
  cursor: pointer;
`;
export default Navigation;
