import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useGetUsername } from "../api/hooks/useGetUsername";
import { useAddPost } from "./../api/hooks/useAddPost";
import * as UI from "../variables/styleStore";
import { MdKeyboardBackspace } from "react-icons/md";
import Button from "./common/Button";

function PostWrite({ setOpenModal }) {
  //username 조회
  const { username } = useGetUsername();
  const inputRef = useRef(null);

  //모달 close 관리
  const PostWriteModalCloseHandler = () => {
    setOpenModal(false);
  };

  const [image, setImg] = useState("");
  const [content, setContent] = useState("");

  const { addPost, addPostIsLoading } = useAddPost();

  //이미지 파일을 base64로 변환시켜주는 코드
  const changeImageHandler = e => {
    let fileReader = new FileReader();
    let inputImage = e.target.files[0];
    setImg(inputImage);
    fileReader.readAsDataURL(inputImage);
    fileReader.onloadend = () => {
      setImg(fileReader.result);
    };
  };

  const changeContentHandler = e => {
    setContent(e.target.value);
  };

  //파일 업로드를 위한 formData append
  const inputSubmitHandler = e => {
    e.preventDefault();
    const file = inputRef.current.files[0];
    const formData = new FormData();
    formData.append("image", file);
    formData.append("content", content);
    addPost(formData);
    setOpenModal(false);
  };

  return (
    <StWriteModal onSubmit={inputSubmitHandler}>
      <Head>
        <MdKeyboardBackspace
          size="30"
          cursor="pointer"
          onClick={PostWriteModalCloseHandler}
        >
          뒤로가기
        </MdKeyboardBackspace>
        <div>새 게시물 만들기</div>
        <Button btnColor={"white"}>게시하기</Button>
      </Head>
      <InputWrap>
        <UI.FlexColumn>
          <InputImage>
            <input
              ref={inputRef}
              type="file"
              name="image"
              accept="image/*"
              onChange={changeImageHandler}
            />
          </InputImage>
          {image && <ImgReview src={image} alt="게시글 이미지" />}
        </UI.FlexColumn>
        <InputContentWrap>
          <UserProfile>
            <UserPhoto postUserImage={username?.userImage} />
            <div>{username.username}</div>
          </UserProfile>
          <InputContent
            type="text"
            name="content"
            placeholder="내용을 입력하세요."
            onChange={changeContentHandler}
          />
        </InputContentWrap>
      </InputWrap>
    </StWriteModal>
  );
}

export default PostWrite;

const StWriteModal = styled.form`
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
  padding-top: 5px;
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
  margin-right: 5px;
`;

const InputImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 550px;
  height: 100%;
`;

const ImgReview = styled.img`
  width: 550px;
  height: 560px;
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
  outline: none;
  font-size: 17px;
`;
