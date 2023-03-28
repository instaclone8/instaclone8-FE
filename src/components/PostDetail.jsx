import { useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGetPostOne } from "../api/hooks/useGetPostOne";
import { useUpdatePost } from "../api/hooks/useUpdatePost";
import { useDeletePost } from "./../api/hooks/useDeletePost";

function PostDetail({ setOpenModal, setReviseOpenModal, id }) {
  //수정하기 클릭시 isEditMode=true
  const [isEditMode, setIsEditMode] = useState(false);

  //모달 close 관리
  const PostWriteModalCloseHandler = () => {
    setOpenModal(false);
  };

  //수정 모드
  const ClickGoUpdateModalHandler = () => {
    setIsEditMode(true);
  };

  //게시글 상세조회
  const { postOne } = useGetPostOne(id);

  //게시글 삭제
  const { deletePost, status } = useDeletePost();
  const ClickDeleteHandler = id => {
    deletePost(id);
    setOpenModal(false);
  };

  //게시글 수정
  const { updatePost } = useUpdatePost();
  const [editPost, setEditPost] = useState({
    image: "",
    content: "",
  });

  const changeInputHandler = event => {
    const { value, name } = event.target;
    setEditPost(pre => ({ ...pre, [name]: value }));
  };

  const inputSubmitHandler = e => {
    e.preventDefault();
    updatePost(editPost);
    setOpenModal(false);
  };

  return (
    <>
      {isEditMode ? (
        <StPostDetailModal w="1000" h="700" top="10" left="25">
          <StDetail>
            <Head>
              <button onClick={PostWriteModalCloseHandler}>뒤로가기</button>
              <div>게시물 수정하기</div>
              <button onClick={inputSubmitHandler}>수정하기</button>
            </Head>
            <InputWrap>
              <InputImage>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={changeInputHandler}
                />
              </InputImage>
              <InputContentWrap>
                <UserProfile>
                  <UserPhoto>프로필사진</UserPhoto>
                  <div>닉네임</div>
                </UserProfile>
                <InputContent
                  type="text"
                  name="content"
                  onChange={changeInputHandler}
                />
              </InputContentWrap>
            </InputWrap>
          </StDetail>
        </StPostDetailModal>
      ) : (
        <StPostDetailModal w="1400" h="800" top="7" left="15">
          <StDetail display="flex">
            <Photo>{postOne?.image}</Photo>
            <StContentWrap>
              <UserInfoWrap>
                <UserInfo>
                  <UserPhoto>{postOne?.userImage}</UserPhoto>
                  <div>{postOne?.username}</div>
                </UserInfo>
                <div>
                  <CloseBtn onClick={PostWriteModalCloseHandler}>X</CloseBtn>
                </div>
              </UserInfoWrap>
              <ContentBox>
                <Content>{postOne?.content}</Content>
                <ContentBtn>
                  <button onClick={ClickGoUpdateModalHandler}>수정하기</button>
                  <button onClick={() => ClickDeleteHandler(postOne?.postId)}>
                    삭제하기
                  </button>
                </ContentBtn>
              </ContentBox>
              <PostLike>
                <div>좋아요</div>
                <div>좋아요 {postOne?.likeCnt}개</div>
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
      )}
    </>
  );
}

export default PostDetail;

const StPostDetailModal = styled.div`
  background-color: white;

  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  width: ${({ w }) => w}px;
  height: ${({ h }) => h}px;

  position: fixed;
  z-index: 15;

  top: ${({ top }) => top}%;
  left: ${({ left }) => left}%;
`;

const StDetail = styled.div`
  display: ${({ display }) => display};
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

/* edit mode css */
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
