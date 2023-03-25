import React from "react";
import styled from "styled-components";

function PostDetail({ setOpenModal }) {
  //모달 close 관리
  const PostWriteModalCloseHandler = () => {
    setOpenModal(false);
  };

  return (
    <StPostDetailModal>
      <button onClick={PostWriteModalCloseHandler}>뒤로가기</button>
    </StPostDetailModal>
  );
}

export default PostDetail;

const StPostDetailModal = styled.div`
  background-color: #dcebeb;
  border-radius: 30px;
  width: 1500px;
  height: 800px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-55%, -50%);
  z-index: 20;
`;
