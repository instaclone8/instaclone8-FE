import React from "react";
import styled from "styled-components";

function PostWrite({ setOpenModal }) {
  //모달 close 관리
  const PostWriteModalCloseHandler = () => {
    setOpenModal(false);
  };

  return (
    <StWriteModal>
      <Head>
        <button onClick={PostWriteModalCloseHandler}>뒤로가기</button>
        <div>새 게시물 만들기</div>
        <button>게시하기</button>
      </Head>
      <InputWrap>
        <InputImage>
          <input type="file" />
        </InputImage>
        <InputContentWrap>
          <UserProfile>
            <UserPhoto>프로필사진</UserPhoto>
            <div>닉네임</div>
          </UserProfile>
          <InputContent type="text" />
        </InputContentWrap>
      </InputWrap>
    </StWriteModal>
  );
}

export default PostWrite;

const StWriteModal = styled.div`
  background-color: white;
  border-radius: 30px;
  width: 1000px;
  height: 700px;

  position: fixed;
  top: 10%;
  left: 25%;
  z-index: 15;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #d4d0d0;
`;

const InputWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-weight: bold;
`;

const UserPhoto = styled.div`
  //사진 들어가면 border 없앨 예정
  border: 1px solid gray;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
`;

const InputImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 550px;
  height: 100%;
`;
const InputContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InputContent = styled.input`
  display: flex;
  height: 550px;
  width: 400px;
`;
