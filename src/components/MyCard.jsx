import { useState } from 'react';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { FaComment } from 'react-icons/fa';
import styled from 'styled-components';
import * as UI from '../variables/styleStore'

// MyCard 컴포넌트
const MyCard = ({ children, post, onClick }) => {

  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };


  return (
    <MyCardOne
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    // BgImg={post.image}
    >
      <UI.FlexRow gap={`10px`} fontSize={`20px`} color={`#efefef`}>
        {isHover ? (
          <>
            <BsFillSuitHeartFill /> {post.likeCnt}
            <FaComment />{post.commentCnt}
          </>
        ) : null}
      </UI.FlexRow>

    </MyCardOne>
  );
}

const MyCardOne = styled.div`
  background-color: #9833b1;
  background-image: ${({ BgImg }) => BgImg ? BgImg : `url('/img/instagram-font.png')`};
  width: 280px;
  height: 280px;

  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 5px; */
  margin: 5px 5px 0 0;
  
  transition: all 0.5s;
  &:hover {
    background-color: #632274;
  }
`

export default MyCard