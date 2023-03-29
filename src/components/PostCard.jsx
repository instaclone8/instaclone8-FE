import React, { useState } from "react";
import styled from "styled-components";
import PostDetail from "./PostDetail";
import ModalBlackBg from "./ModalBlackBg";
import { useGetPosts } from "./../api/hooks/useGetPosts";
import { IoMdHeartEmpty } from "react-icons/io";

function PostCard({ setReviseOpenModal }) {
  //게시글 전체조회
  const { posts } = useGetPosts();

  //상세 모달로 id를 넘겨주기 위한 state
  const [currentId, setCurrentId] = useState();

  //모달 open 관리
  const [openModal, setOpenModal] = useState(false);
  const PostWriteModalOpenHandler = id => {
    setCurrentId(id);
    setOpenModal(true);
  };

  return (
    <>
      {posts?.map(post => (
        <StPostComponent key={post.postId}>
          <PostProfile>
            <ProfilePhoto postUserImage={post.userImage} />
            <ProfileName>{post.username}</ProfileName>
          </PostProfile>
          <PostPhoto src={post.image} alt={post.username} />
          <PostLike>
            <div>
              <IoMdHeartEmpty size="28" />
            </div>
            <div>좋아요 {post.likeCnt}개</div>
          </PostLike>
          <PostContent>{post.content}</PostContent>
          <PostCmt>
            <div>댓글 {post.commentCnt}개</div>

            {/* 상세페이지 모달 */}
            <div>
              <button onClick={() => PostWriteModalOpenHandler(post.postId)}>
                상세보기
              </button>
            </div>
          </PostCmt>
        </StPostComponent>
      ))}

      {openModal && (
        <PostDetail
          id={currentId}
          setOpenModal={setOpenModal}
          setReviseOpenModal={setReviseOpenModal}
        />
      )}
      {/* 모달 열림과 동시에 어두운 백그라운드 넣어주고 어두운 부분 클릭시 모달 닫힘 */}
      {openModal && <ModalBlackBg setOpenModal={setOpenModal} />}
    </>
  );
}

export default PostCard;

const StPostComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 28%;
  height: 800px;
  transform: translate(140%);
  margin-top: 50px;
  gap: 15px;
  border-bottom: 1px solid #cfcbcb;
  position: relative;
`;

const PostProfile = styled.div`
  display: flex;
  align-items: center;
`;

const ProfilePhoto = styled.div`
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

const ProfileName = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const PostPhoto = styled.img`
  //사진 들어가면 border 없앨 예정
  border: 1px solid gray;
  border-radius: 5px;
  width: 100%;
  height: 500px;
`;
const PostLike = styled.div`
  display: flex;
  gap: 15px;
  font-weight: bold;
`;

const PostContent = styled.div`
  padding: 30px 0px;
  white-space: pre-line;
  overflow: auto;
`;
const PostCmt = styled.div`
  display: flex;
  gap: 20px;
  color: gray;
`;
