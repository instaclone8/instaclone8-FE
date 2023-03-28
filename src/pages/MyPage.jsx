import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useGetMypost } from '../api/hooks/useGetMypost'
import Wrapper from '../components/common/Wrapper'
import NavTest from '../components/NavTest'
import * as UI from '../variables/styleStore'
import PostDetail from '../components/PostDetail'
import ModalBlackBg from '../components/ModalBlackBg'
import MyCard from '../components/MyCard'

function MyPage() {

  //재란님 오픈모달 세트////////////////////////
  const [currentId, setCurrentId] = useState();
  const [openModal, setOpenModal] = useState(false)
  const PostWriteModalOpenHandler = id => {
    setCurrentId(id);
    setOpenModal(true);
  };

  const params = useParams();
  const { myPost } = useGetMypost(params.username);
  console.log(myPost);

  return (
    <Wrapper flex={'row'} align={`flex-start`} overflow={'scroll'}>
      <NavTest />
      <UI.FlexColumn width={`860px`}>
        <UI.FlexRow BgColor={`white`} justify={`flex-start`} others={`margin : 50px 0 50px`}>
          <ProfileImg />
          <UI.FlexColumn width={'fit-content'} gap={`20px`}>
            <NicknameDiv>{myPost?.username}</NicknameDiv>
            <NicknameDiv>게시물 {myPost?.postsCnt}개</NicknameDiv>
          </UI.FlexColumn>
        </UI.FlexRow >
        <UI.FlexRow BgColor={`beige`} height={`fit-content`} justify={`flex-start`} wrap={'wrap'} overflow={'scroll'}>
          {myPost?.posts?.map((post) => {
            return (
              <div key={post.postId}>
                <MyCard onClick={() => PostWriteModalOpenHandler(post.postId)} post={post} />
              </div>
            )
          })}

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


        </UI.FlexRow>
      </UI.FlexColumn>
    </Wrapper>
  )
}

const NicknameDiv = styled.div`
background-color: aqua;
  width: fit-content;
  height: fit-content;
  font-size: 30px;
`

const ProfileImg = styled.img`
background-color: beige;
  width: 150px;
  height: 150px;
  border: none;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 100px;
  margin-left: 100px;
`

export default MyPage