import { useEffect } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { GitHub } from "../Components/Icons";
import ProjectImg from "../Components/ProjectImg";

const Container = styled.div`
  min-height: calc(100vh - 80px);
  display: flex;
  align-items:center;
  flex-direction: column;
  background-color: #FDFDFD;
`;

const Title = styled.span`
  font-size: 50px;
  font-weight: 600;
  line-height: 60%;
  margin: 50px 0px;
  border-bottom: 12px solid rgba(247, 129, 191, 0.7);
`;

const TextContainer = styled.ul`
  width: 55%;
  font-size: 18px;
  @media screen and (max-width: 480px){
    width: 90%;
    font-size: 14px;
  }
  a{
    color: #00B9F1;
  }
  margin-bottom: 50px;
`;

const TextTitle = styled.div`
  font-size: 2em;
  font-weight: 600;
  margin: 20px 0px;
`;

const Text = styled.li`
  font-size: 1em;
  margin-left: 40px;
  line-height: 200%;
`;

const GitLink = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  svg{
    fill: black;
  }
  span{
    margin: 0px 20px;
    font-size: 2.5em;
    font-weight: 600;
  }
  a{
    font-size: 2.5em;
    font-weight: 600;
    color: skyblue;
  }
  @media screen and (max-width: 480px){
    font-size: 7px;
    span{
      margin: 0px 10px;
    }
  }
`;
//--------------------------------------------------------------STYLED COMPONENT END-------------------------------------------------------

const SimplePost = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return <>
    <Helmet title="Portfolio | Simple Post" />
    <Container>
      <Title>Simple Posting</Title>
      <ProjectImg src="../../Portfolio/projectImg/simpleposting/login.JPG" text="Simple Posting" />
      <TextContainer>
        <TextTitle>Intro</TextTitle>
        <Text>간단한 텍스트 게시물을 올리고 좋아요, 댓글 기능이 있는 프로젝트이다.</Text>
        <Text>이 프로젝트는 MongoDB, Express, React, GraphQL, Apollo Server를 사용하였다.</Text>
        <Text>Login은 passport, jsonwebtoken을 사용하였다.</Text>
      </TextContainer>
      <ProjectImg src="../../Portfolio/projectImg/simpleposting/signup.JPG" text="Sign Up" />
      <TextContainer>
        <TextTitle>User</TextTitle>
        <Text>Sign up은 email과 username을 입력하고나면 MongoDB에 사용자가 등록이 된다.</Text>
        <Text>등록된 이메일로 로그인을 시도하면 User에 loginSecret을 생성하고 등록된 이메일에 mailgun을 사용하여 loginSecret을 보낸다.</Text>
        <Text>loginSecret을 복사하여 로그인이 완료되면 localstorage에 json web token이 저장되어 로그인을 유지한다.</Text>
      </TextContainer>
      <ProjectImg src="../../Portfolio/projectImg/simpleposting/token.JPG" text="JWT" />
      <TextContainer>
        <TextTitle>Upload</TextTitle>
        <Text>Add Post 버튼을 누르면 작성할 수 있도록 modal 창이 뜬다.</Text>
        <Text>@apollo/client의 useMutation을 사용하여 Post를 등록한다.</Text>
        <Text>등록한 Post에 Like, Comment, Update, Delete 버튼이 존재하는데 로그인한 자신의 것에만 Update, Delete버튼이 존재한다.</Text>
      </TextContainer>
      <ProjectImg src="../../Portfolio/projectImg/simpleposting/upload.JPG" text="Upload" />
      <TextContainer>
        <TextTitle>Comment & Like</TextTitle>
        <Text>말풍선 버튼을 누르면 Comment들과 새로운 Comment를 작성할 수 있도록 modal 창이 뜬다.</Text>
        <Text>Comment는 useMutation을 사용하여 등록한다.</Text>
        <Text>Like는 Post의 id와 Like를 누른 User의 id가 존재하는 경우 Like를 삭제하고, 없는 경우에는 생성하여 Like 여부를 useQuery로 불러와 Like 상태를 보여준다.</Text>
      </TextContainer>
      <ProjectImg src="../../Portfolio/projectImg/simpleposting/comment.JPG" text="Comment" />
      <GitLink>
        <GitHub size="48" />
        <span>Github Link</span>
        <a href="https://github.com/hyunduk-jo/merng-stack/tree/main/server">SERVER</a>
        <span>/</span>
        <a href="https://github.com/hyunduk-jo/merng-stack/tree/main/client">CLIENT</a>
      </GitLink>
    </Container>
  </>
}

export default SimplePost;