import { useEffect } from "react";
import styled from "styled-components";
import { GitHub } from "../Components/Icons";
import ProjectImg from "../Components/ProjectImg";
import { Helmet } from 'react-helmet';

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
    color: blue;
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

const InstaClone = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return <>
    <Helmet title="Portfolio | Insta Clone" />
    <Container>
      <Title>Insta Clone</Title>
      <ProjectImg src="../../Portfolio/projectImg/instaclone/feed.JPG" text="인스타 클론" />
      <TextContainer>
        <TextTitle>Intro</TextTitle>
        <Text>인스타그램 클론 코딩하였다.</Text>
        <Text>이 프로젝트는 Prisma1, React, GraphQL, Apollo Server를 사용하였다.</Text>
        <Text>Login은 passport, jsonwebtoken을 사용하였다.</Text>
      </TextContainer>
      <TextContainer>
        <TextTitle>Prisma</TextTitle>
        <Text>Backend는 Prisma1을 사용하였다.</Text>
        <Text>GraphQL-yoga를 사용하였고 파일을 업로드 할 때는 GraphQLServer에 내장되어있는 express를 사용하여 REST로 업로드 해주었다.</Text>
      </TextContainer>
      <ProjectImg src="../../Portfolio/projectImg/instaclone/prisma.JPG" text="Prisma" />
      <TextContainer>
        <TextTitle>Log In</TextTitle>
        <Text>로그인은 passport-jwt, json web token을 사용하여 localStorage에 토큰을 저장하는 방식을 사용하였다.</Text>
        <Text>로그인을 하기 위해서는 당연히 가입이 필요하고 가입후 로그인을 하면 가입을 했던 이메일로 loginSecret을 포함한 이메일이 온다.</Text>
        <Text>이메일은 nodemailer, nodemailer-mailgun-transport를 사용하여 전송하였다.</Text>
        <Text>Alert 대신 Toastify를 사용하여 알림을 준다.</Text>
      </TextContainer>
      <ProjectImg src="../../Portfolio/projectImg/instaclone/signup.JPG" text="Sign Up" />
      <TextContainer>
        <TextTitle>Feed</TextTitle>
        <Text>로그인 성공 후 사용자들이 올린 게시물들이 보여진다.</Text>
        <Text>게시물을 업로드 할 때 여러장의 사진을 올린 경우에는 useEffect를 이용해 사진들이 자동으로 슬라이드된다.</Text>
        <Text>좋아요와 댓글의 경우는 fake state를 만들어 주어 즉시 변경이 적용되도록 하였다.</Text>
      </TextContainer>
      <ProjectImg src="../../Portfolio/projectImg/instaclone/feed.JPG" text="Feed" />
      <TextContainer>
        <TextTitle>Search</TextTitle>
        <Text>검색을 하면 사용자와 게시물의 검색 결과가 나온다.</Text>
        <Text>사용자 검색은 검색하기 위해 입력한 텍스트를 포함하는 username, firstname, lastname이 있는 사용자를 찾아주고 없는 경우 User Not Found를 보여준다.</Text>
        <Text>게시물 검색은 검색하기 위해 입력한 텍스트를 포함하는 caption, location이 있는 게시물을 찾아주고 없는 경우 Post Not Found를 보여준다.</Text>
      </TextContainer>
      <ProjectImg src="../../Portfolio/projectImg/instaclone/searchresult.JPG" text="검색 결과" />
      <TextContainer>
        <TextTitle>Upload</TextTitle>
        <Text>Prisma에는 Post의 id, File의 id, url 등이 저장이 되고 사진 자체는 AWS S3에 저장이 된다.</Text>
        <Text>AWS S3에 사진을 업로드하기 위해 multer, multer-s3를 사용하였다.</Text>
        <Text>GraphQL을 사용하지만 사진 업로드만 REST를 사용하였다.</Text>
        <Text>업로드를 하고나면 다시 Feed 페이지로 이동한다.</Text>
      </TextContainer>
      <ProjectImg src="../../Portfolio/projectImg/instaclone/upload.JPG" text="Upload Post" />
      <TextContainer>
        <TextTitle>Profile</TextTitle>
        <Text>프로필에는 Avatar, username, fullname, follower, following, 내가 작성한 게시물이 표시된다.</Text>
      </TextContainer>
      <ProjectImg src="../../Portfolio/projectImg/instaclone/profile.JPG" text="Profile" />
      <GitLink>
        <GitHub size="48" />
        <span>Github Link</span>
        <a href="https://github.com/hyunduk-jo/prismagram">SERVER</a>
        <span>/</span>
        <a href="https://github.com/hyunduk-jo/prismagram-frontend">CLIENT</a>
      </GitLink>
    </Container>
  </>
}

export default InstaClone;