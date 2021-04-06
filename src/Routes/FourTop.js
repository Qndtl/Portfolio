import styled from "styled-components";
import { GitHub } from "../Components/Icons";
import ProjectImg from "../Components/ProjectImg";
import { Helmet } from 'react-helmet';
import { useEffect } from "react";

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

const FourTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return <>
    <Helmet title="Portfolio | Four Top" />
    <Container>
      <Title>Four Top</Title>
      <ProjectImg src="../../Portfolio/projectImg/fourtop/home.png" text="Four Top" />
      <TextContainer>
        <TextTitle>
          Intro
        </TextTitle>
        <Text>3D 프린터 커뮤니티 및 렌탈 서비스를 하는 프로젝트이다.</Text>

      </TextContainer>
      <TextContainer>
        <TextTitle>Prisma</TextTitle>
        <Text>Backend는 Prisma1을 사용하였다.</Text>
        <Text>인스타 클론과 마찬가지로 GraphQL-yoga를 사용하였고 파일을 업로드 할 때는 GraphQLServer에 내장되어있는 express를 사용하여 REST로 업로드 해주었다.</Text>
      </TextContainer>
      <TextContainer>
        <TextTitle>Login</TextTitle>
        <Text>로그인은 passport-jwt, json web token을 사용하여 localStorage에 토큰을 저장하는 방식을 사용하였다.</Text>
        <Text>로그인을 하기 위해서는 당연히 가입이 필요하고 가입후 로그인을 하면 가입을 했던 이메일로 loginSecret을 포함한 이메일이 온다.</Text>
        <Text>토큰 생성은 이메일로 받은 loginSecret이 Prisma에 저장되어있는 loginSecret과 같으면 생성이되고 localStorage에 저장이 된다.</Text>
        <Text>이메일은 nodemailer, nodemailer-mailgun-transport를 사용하여 전송하였다.</Text>
        <Text>Alert 대신 Toastify를 사용하여 알림을 준다.</Text>
      </TextContainer>
      <ProjectImg src="../../Portfolio/projectImg/fourtop/localstorage.JPG" text="Token" />
      <TextContainer>
        <TextTitle>Gallery</TextTitle>
        <Text>아직은 업로드시에 무료, 유료를 구분하지 않았기 때문에 전부 무료로 게시물이 넘어간다. &#40;prisma에서 Post 스키마에 payment를 추가해주어 구분해주면 될 것 같다&#41;</Text>
        <Text>GraphQL pagination을 사용하여 User를 3명씩 보여준다.</Text>
      </TextContainer>
      <ProjectImg src="../../Portfolio/projectImg/fourtop/gallery.png" text="Gallery" />
      <TextContainer>
        <TextTitle>Company</TextTitle>
        <Text>useState를 사용하여 소개, 인사말, 비젼 & 미션, 연혁 탭을 클릭하면 각각의 컴포넌트를 보여준다.</Text>
      </TextContainer>
      <ProjectImg src="../../Portfolio/projectImg/fourtop/company.JPG" text="Company" />
      <TextContainer>
        <TextTitle>Upload</TextTitle>
        <Text>사진은 AWS S3에 저장을 하고 Prisma의 Post에는 AWS S3에 저장되어있는 사진의 url이 저장되어있다 &#40;multer, multer-s3사용&#41;</Text>
        <Text>이미지 파일을 선택하면 선택한 이미지 파일을 미리보여준다.</Text>
        <Text>Gallery에서 게시물을 눌렀을때 상세 페이지 보여줄 예정이다.</Text>
      </TextContainer>
      <ProjectImg src="../../Portfolio/projectImg/fourtop/upload.JPG" text="Upload" />
      <TextContainer>
        <TextTitle>Profile</TextTitle>
        <Text>사용자의 게시물 수, 팔로워 수, 팔로잉 수 등을 볼 수 있다.</Text>
        <Text>프로필이 자신인 경우에는 edit profile이 보여 프로필 변경이 가능하다.</Text>
        <Text>팔로워와 팔로우를 누르면 팔로워와 팔로우하는 사용자들을 오른쪽에 보이도록 하였다.</Text>
      </TextContainer>
      <ProjectImg src="../../Portfolio/projectImg/fourtop/profile.JPG" text="Profile" />
      <GitLink>
        <GitHub size="48" />
        <span>Github Link</span>
        <a href="https://github.com/Qndtl/Printer-back">SERVER</a>
        <span>/</span>
        <a href="https://github.com/Qndtl/Printer-Front">CLIENT</a>
        <span>/</span>
        <a href="https://4top.netlify.com">LINK</a>
      </GitLink>
    </Container>
  </>
}

export default FourTop;