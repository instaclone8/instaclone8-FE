import { BsFillSuitHeartFill } from 'react-icons/bs';
import { FaComment } from 'react-icons/fa';
import styled from 'styled-components';
import * as UI from '../variables/styleStore'

// MyCard 컴포넌트
const MyCard = ({ children, post, onClick }) => {

  return (
    <MyCardOne
      onClick={onClick}
      src={post.image}
    >

      <UI.FlexRow gap={`10px`} fontSize={`20px`} color={`#efefef`} className='icon'>
        <BsFillSuitHeartFill /> {post.likeCnt}
        <FaComment />{post.commentCnt}
      </UI.FlexRow>

    </MyCardOne>
  );
}

const MyCardOne = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  width: 280px;
  height: 280px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 5px 0 0;
  position: relative;
  
  .icon {
    opacity: 0;
  }
  
  transition: all 0.5s;
  &:hover {
    filter: brightness(70%);
    .icon {
    opacity: 1;
  }
  }
`




export default MyCard