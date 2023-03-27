import React from "react";
import styled from "styled-components";

function PostDetail({ setOpenModal, setReviseOpenModal }) {
  //모달 close 관리
  const PostWriteModalCloseHandler = () => {
    setOpenModal(false);
  };

  const ClickGoUpdateModalHandler = () => {
    setOpenModal(false);
    setReviseOpenModal(true);
  };

  return (
    <StPostDetailModal>
      <StDetail>
        <Photo>사진</Photo>
        <StContentWrap>
          <UserInfoWrap>
            <UserInfo>
              <UserPhoto>프사</UserPhoto>
              <div>닉네임</div>
            </UserInfo>
            <div>
              <CloseBtn onClick={PostWriteModalCloseHandler}>X</CloseBtn>
            </div>
          </UserInfoWrap>
          <ContentBox>
            <Content>게시글 내용 들어갈 부분 게시글 내용 들어갈 부분</Content>
            <ContentBtn>
              <button onClick={ClickGoUpdateModalHandler}>수정하기</button>
              <button>삭제하기</button>
            </ContentBtn>
          </ContentBox>
          <PostLike>
            <div>좋아요</div>
            <div>좋아요 0개</div>
          </PostLike>
          <CommentWrap>
            <div>기존에 달려있던 댓글 가져오기</div>
          </CommentWrap>
          <CmtInputWrap>
            <input type="text" placeholder="댓글 달기..." />
            <button>게시</button>
          </CmtInputWrap>
        </StContentWrap>
      </StDetail>
    </StPostDetailModal>
  );
}

export default PostDetail;

const StPostDetailModal = styled.div`
  background-color: white;

  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  width: 1400px;
  height: 800px;

  position: fixed;
  top: 7%;
  left: 15%;
  z-index: 15;
`;

const StDetail = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Photo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 800px;
  border: 1px solid gray;
`;

const StContentWrap = styled.div`
  width: 600px;
  height: 800px;

  /* 영역 확인용 컬러 - 삭제예정 */
  background-color: #e9dcbb57;
`;

const UserInfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  font-weight: bold;
  color: black;
  padding: 10px;
  border-bottom: 1px solid #d4d0d0;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const UserPhoto = styled.div`
  //사진 들어가면 border 없앨 예정
  border: 1px solid gray;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
`;

const CloseBtn = styled.button``;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

const Content = styled.div`
  /* 영역 확인용 경계선 - 삭제 예정 */
  border: 1px solid gray;

  height: 250px;
`;

const ContentBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`;

const PostLike = styled.div`
  display: flex;
  gap: 20px;
  font-weight: bold;
  padding: 10px;
`;

const CommentWrap = styled.div`
  /* 영역 확인용 경계선 - 삭제 예정 */
  border: 1px solid gray;
  height: 300px;
  padding: 10px;
`;

const CmtInputWrap = styled.div`
  border-top: 1px solid #d4d0d0;
  margin-top: 10px;
  padding: 10px;
  display: flex;
`;
