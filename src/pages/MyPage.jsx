import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useGetMypost } from "../api/hooks/useGetMypost";
import Wrapper from "../components/common/Wrapper";
import * as UI from "../variables/styleStore";
import PostDetail from "../components/PostDetail";
import ModalBlackBg from "../components/ModalBlackBg";
import MyCard from "../components/MyCard";
import Navigation from "../components/Navigation";

function MyPage() {
  //재란님 오픈모달 세트////////////////////////
  const [openReviseModal, setReviseOpenModal] = useState(false);
  const [currentId, setCurrentId] = useState();
  const [openModal, setOpenModal] = useState(false);
  const PostWriteModalOpenHandler = id => {
    setCurrentId(id);
    setOpenModal(true);
  };

  const params = useParams();
  const { myPost } = useGetMypost(params.username);

  ////////무한스크롤 테스트 //////////////////////////////////////////////////



  const [position, setPosition] = useState(0);
  const onScroll = () => {
    console.log("스크롤위치", window.scrollY);
    console.log("화면하이트", window.innerHeight);
    console.log('전체높이', document.body.offsetHeight);
    setPosition(window.scrollY)
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      console.log('끝도착')
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])


  ///////////////////////////////////////////////////////////////////


  return (
    <Wrapper align={`flex-start`} justify={`none`}>
      <Navigation openModal={openReviseModal} setOpenModal={setReviseOpenModal} />
      <Div>
        <UI.FlexRow justify={`flex-start`} others={`margin : 50px 0 50px`}>
          <ProfileImg />
          <UI.FlexColumn
            width={"fit-content"}
            gap={`20px`}
            justify={`flex-start`}
            align={`flex-start`}
          >
            <NicknameDiv>{myPost?.username}</NicknameDiv>
            <NicknameDiv>게시물 {myPost?.postsCnt}개</NicknameDiv>
          </UI.FlexColumn>
        </UI.FlexRow>
        <DivisionLine />
        <UI.FlexRow height={`fit-content`} justify={`flex-start`} wrap={"wrap"}>
          {myPost?.posts?.map(post => {
            return (
              <div key={post.postId}>
                <MyCard
                  onClick={() => PostWriteModalOpenHandler(post.postId)}
                  post={post}
                />
              </div>
            );
          })}
        </UI.FlexRow>
      </Div>
      {/* 재란님 오픈모달 가져옴!!////////////////////// */}
      {openModal && (
        <PostDetail
          id={currentId}
          setOpenModal={setOpenModal}
        // setReviseOpenModal={setReviseOpenModal}
        />
      )}
      {/* 모달 열림과 동시에 어두운 백그라운드 넣어주고 어두운 부분 클릭시 모달 닫힘 */}
      {openModal && <ModalBlackBg setOpenModal={setOpenModal} />}
      {/* /////////////////////////////////////////// */}
    </Wrapper>
  );
}

const Div = styled.div`
  width: 860px;
  height: fit-content;
  transform: translate(70%);
`;

const DivisionLine = styled.div`
  border: 1px solid #c7c7c760;
  width: 100%;
  height: 0;
  margin-bottom: 30px;
`;

const NicknameDiv = styled.div`
  width: fit-content;
  height: fit-content;
  font-size: 25px;
`;

const ProfileImg = styled.img`
  background-image: ${({ userImage }) =>
    userImage
      ? `url(${userImage})`
      : `url(${process.env.PUBLIC_URL}/img/computerCat2.gif)`};
  background-position: center;
  background-size: cover;
  width: 150px;
  height: 150px;
  border: none;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 100px;
  margin-left: 100px;
`;

export default MyPage;
