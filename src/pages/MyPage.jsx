import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGetMypost } from "../api/hooks/useGetMypost";
import Wrapper from "../components/common/Wrapper";
import * as UI from "../variables/styleStore";
import PostDetail from "../components/PostDetail";
import ModalBlackBg from "../components/ModalBlackBg";
import MyCard from "../components/MyCard";
import Navigation from "../components/Navigation";
import { useQuery } from '@tanstack/react-query';
import apis, { apis_token } from '../axios/api';
import { keys } from '../api/utils/createQueryKey';

function MyPage() {
  //재란님 오픈모달 세트////////////////////////
  const [openReviseModal, setReviseOpenModal] = useState(false);
  const [currentId, setCurrentId] = useState();
  const [openModal, setOpenModal] = useState(false);
  const PostWriteModalOpenHandler = id => {
    setCurrentId(id);
    setOpenModal(true);
  };






  ////////무한스크롤 테스트 //////////////////////////////////////////////////

  const [num, setNum] = useState(0);
  const [postData, setPostData] = useState([]);

  const { data, refetch, isFetching, isLoading } = useQuery(
    [keys.GET_MYPOST, num],
    async () => {
      const response = await apis_token.get(
        `/api/user/mypage?page=${num}`
      );
      console.log(response.data);
      return response.data;
    },
    {
      // enabled: false,
      keepPreviousData: true,
    }
  );



  const onScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      console.log('끝도착')
      setNum(num =>
        num + 1
        //   {
        //   console.log("@@@@@@@@@@@@", (num + 1));
        //   refetch(num)
        //   return num + 1;
        // }
      );
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    refetch()
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [num])

  useEffect(() => {
    if (data) {
      setPostData(prevPostData => [...prevPostData, ...data.posts]);
      console.log('@@@@@@@@@@@@@@@@@@', postData);
    }
  }, [data])

  if (isLoading) {
    return <h1>로딩중...........@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@</h1>
  }


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
            <NicknameDiv>{data?.username}</NicknameDiv>
            <NicknameDiv>게시물 {data?.postsCnt}개</NicknameDiv>
          </UI.FlexColumn>
        </UI.FlexRow>
        <DivisionLine />
        <UI.FlexRow height={`fit-content`} justify={`flex-start`} wrap={"wrap"}>
          {postData?.map(post => {
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
