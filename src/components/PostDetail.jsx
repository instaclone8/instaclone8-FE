import { useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useGetPostOne } from "../api/hooks/useGetPostOne";
import { useGetUsername } from "../api/hooks/useGetUsername";
import { useUpdatePost } from "../api/hooks/useUpdatePost";
import { useDeletePost } from "./../api/hooks/useDeletePost";
import { VscChromeClose } from "react-icons/vsc";
import Button from "./common/Button";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdKeyboardBackspace } from "react-icons/md";
import { VscSmiley } from "react-icons/vsc";

function PostDetail({ setOpenModal, setReviseOpenModal, id }) {
  //모달 close 관리 - 상세보기 모달 닫기
  const PostWriteModalCloseHandler = () => {
    setOpenModal(false);
  };
  //모달 close 관리 - 수정하는 모달에서 상세보기 모달로 돌아가기
  const PostEditModalCloseHandler = () => {
    setIsEditMode(false);
  };

  //게시글 상세조회, 유저 고유 id 조회
  const { postOne } = useGetPostOne(id);
  const { username } = useGetUsername();

  //수정하기 클릭시 isEditMode=true
  const [isEditMode, setIsEditMode] = useState(false);

  //수정 모드 open
  const ClickGoUpdateModalHandler = () => {
    setIsEditMode(true);
  };

  //게시글 수정
  const { updatePost } = useUpdatePost(id);
  const [editPost, setEditPost] = useState({
    image: postOne?.image,
    content: postOne?.content,
  });

  const changeInputHandler = event => {
    const { value, name } = event.target;
    setEditPost(pre => ({ ...pre, [name]: value }));
  };

  //이미지 null 관련, 이미지 file 가리킴
  const inputRef = useRef(null);
  // 미리보기 이미지 base64를 담는 state
  const [img, setImg] = useState(null);
  const imageHandler = e => {
    // 이미지 파일을 base64로 변환시켜주는 코드
    const fileReader = new FileReader();
    const inputImage = e.target.files[0];

    fileReader.readAsDataURL(inputImage);
    fileReader.onloadend = () => {
      setImg(pre => ({ ...pre, image: fileReader.result }));
    };
  };

  //업데이트(수정할 때 formData에 이미지는 반영 X)
  const inputSubmitHandler = e => {
    const file = inputRef.current.files;
    const formData = new FormData();
    if (file) {
      formData.append("image", file);
    }
    formData.append("content", editPost.content);
    updatePost({ formData, id });
    setOpenModal(false);
  };

  //상세보기에서 수정할때 기존의 데이터 불러오는 useEffect
  useEffect(() => {
    setEditPost({ image: postOne?.image, content: postOne?.content });
  }, [isEditMode]);

  //게시글 삭제
  const { deletePost, status } = useDeletePost();
  const ClickDeleteHandler = id => {
    deletePost(id);
    setOpenModal(false);
  };

  return (
    <>
      {isEditMode ? (
        <StPostDetailModal
          w="1000"
          h="700"
          top="10"
          left="25"
          btr="10"
          btl="10"
          bbr="10"
          bbl="10"
        >
          <StDetail>
            <Head>
              {/* 뒤로가기 버튼 */}
              <MdKeyboardBackspace
                size="30"
                cursor="pointer"
                onClick={PostEditModalCloseHandler}
              ></MdKeyboardBackspace>
              <div>게시물 수정하기</div>
              <Button
                btnColor={"white"}
                onClick={() => inputSubmitHandler(postOne?.postId)}
              >
                수정하기
              </Button>
            </Head>
            <InputWrap>
              <InputImage>
                <img
                  src={editPost.image}
                  alt="게시글 이미지"
                  ref={inputRef}
                  onChange={imageHandler}
                />
              </InputImage>
              <InputContentWrap>
                <UserProfile>
                  <UserPhoto postUserImage={postOne?.userImage} />
                  <div>{postOne?.username}</div>
                </UserProfile>
                <InputContent
                  type="text"
                  name="content"
                  value={editPost.content}
                  onChange={changeInputHandler}
                />
              </InputContentWrap>
            </InputWrap>
          </StDetail>
        </StPostDetailModal>
      ) : (
        <StPostDetailModal
          w="1300"
          h="700"
          top="12"
          left="18"
          btr="10"
          bbr="10"
        >
          <StDetail display="flex">
            <Photo src={postOne?.image} alt={postOne?.content} />
            <StContentWrap>
              <UserInfoWrap>
                <UserInfo>
                  <UserPhoto postUserImage={postOne?.userImage} />
                  <div>{postOne?.username}</div>
                </UserInfo>
                <div>
                  {/* 닫기 버튼 */}
                  <VscChromeClose
                    onClick={PostWriteModalCloseHandler}
                    size="25"
                    cursor="pointer"
                  >
                    X
                  </VscChromeClose>
                </div>
              </UserInfoWrap>

              {/* ContentBox -> 상세조회에서 get 해올때 작성자 고유 id 받아서 id가 유저와 일치하는지 확인
              일치하면 수정,삭제버튼 보여주고 아니면 null*/}
              <ContentBox>
                <Content>{postOne?.content}</Content>
                {postOne?.userId === username?.userId ? (
                  <ContentBtn>
                    <Button
                      onClick={ClickGoUpdateModalHandler}
                      btnColor={"white"}
                    >
                      수정하기
                    </Button>
                    <Button
                      onClick={() => ClickDeleteHandler(postOne?.postId)}
                      btnColor={"white"}
                    >
                      삭제하기
                    </Button>
                  </ContentBtn>
                ) : null}
                {/* 댓글 기능 구현하려던 부분 */}
                {/* <CommentWrap>
                  <div></div>
                </CommentWrap> */}
              </ContentBox>
              <PostLike>
                <IoMdHeartEmpty size="28" />
                <div>좋아요 {postOne?.likeCnt}개</div>
              </PostLike>
              <CmtInputWrap>
                <VscSmiley size="30" color="gray" />
                <CmtInput type="text" placeholder="댓글 달기..." />
                <Button btnColor={"white"}>게시</Button>
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

  border-top-right-radius: ${({ btr }) => btr}px;
  border-top-left-radius: ${({ btl }) => btl}px;
  border-bottom-right-radius: ${({ bbr }) => bbr}px;
  border-bottom-left-radius: ${({ bbl }) => bbl}px;

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

const Photo = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 740px;
  height: 700px;
  border-right: 1px solid #d4d0d0;
`;

const StContentWrap = styled.div`
  width: 560px;
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
  background-image: ${({ postUserImage }) =>
    postUserImage
      ? `url(${postUserImage})`
      : `url(${process.env.PUBLIC_URL}/img/computerCat2.gif)`};
  background-position: center;
  background-size: cover;

  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Content = styled.div`
  height: 400px;
  white-space: pre-line;
  overflow: auto;
  border-bottom: 1px solid #d4d0d0;
  padding: 15px;
`;

const ContentBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  padding-right: 15px;
`;

const PostLike = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-weight: bold;
  padding: 10px;
  font-size: 15px;
`;

// const CommentWrap = styled.div`
//   height: 10px;
//   padding: 10px;
// `;

const CmtInputWrap = styled.div`
  border-top: 1px solid #d4d0d0;
  margin-top: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CmtInput = styled.input`
  border: none;
  outline: none;
  width: 430px;
  height: 40px;
  font-size: 15px;
`;
/* edit mode css */
const Head = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #d4d0d0;
  font-weight: bold;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 550px;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`;
const InputContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InputContent = styled.textarea`
  display: flex;
  height: 500px;
  width: 400px;
  white-space: pre-line;
  overflow: auto;
  padding: 10px;
  border: none;
  border-top: 1px solid #d4d0d0;
  border-bottom: 1px solid #d4d0d0;
  font-size: 17px;
`;
