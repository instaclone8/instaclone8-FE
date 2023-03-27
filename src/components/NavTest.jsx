import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ModalBlackBg from "./ModalBlackBg";
import PostWrite from "./PostWrite";

function NavTest() {
  //모달 open 관리
  const [openModal, setOpenModal] = useState(false);
  const PostWriteModalOpenHandler = () => {
    setOpenModal(true);
  };

  const navigate = useNavigate();

  return (
    <>
      <StHeader>
        <div>로고</div>
        <Link to={"/main"}>홈</Link>
        {/* 새 글 작성 모달 */}
        <div>
          <button onClick={PostWriteModalOpenHandler}>만들기</button>
        </div>
        <div>프로필</div>
        <div>마이페이지</div>
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
  align-items: center;
  justify-content: space-evenly;
  border-right: 1px solid #cacaca98;

  position: fixed;
  left: 0;
  width: 10vw;
  height: 100vh;
`;

export default NavTest;
