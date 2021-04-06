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
      <ProjectImg src="https://github.com/Qndtl/Portfolio/blob/master/public/projectImg/fourtop/4tophome.PNG?raw=true" text="Four Top" />
      <TextContainer>
        <TextTitle>
          Intro
        </TextTitle>
        <Text>3D 프린터 커뮤니티 및 렌탈 서비스를 하는 프로젝트이다.</Text>
        <Text>Frontend는 React를 사용하였고 Backend는 Prisma2를 사용하였다.</Text>
      </TextContainer>
      <TextContainer>
        <TextTitle>Login</TextTitle>
        <Text>로그인은 json web token을 사용하여 localStorage에 토큰을 저장하는 방식을 사용하였다.</Text>
        <Text>로그인은 아이디와 비밀번호를 이용하고 bcrypt를 이용하여 비밀번호를 저장하였다.</Text>
        <Text>로그인에 성공을 하면 jwt 토큰을 보내주어 localStorage에 저장을 하고 redux의 state도 변경해준다.</Text>
        <Text>Redux는 아직 배우고 있어 redux-persist를 이용하여 로그인 상태를 유지해 주었다.</Text>
      </TextContainer>
      <ProjectImg src="https://github.com/Qndtl/Portfolio/blob/master/public/projectImg/fourtop/4toplocalhost.PNG?raw=true" text="Token" />
      <TextContainer>
        <TextTitle>Gallery</TextTitle>
        <Text>이달의 무료 작품은 좋아요 많은 순 5명만 보여준다.</Text>
        <Text>이달의 유료 작품은 준비중입니다.</Text>
        <Text>이달의 크리에이터는 좋아요, 댓글 많은 순 5명만 보여준다.</Text>
      </TextContainer>
      <ProjectImg src="https://github.com/Qndtl/Portfolio/blob/master/public/projectImg/fourtop/4topgallery.PNG?raw=true" text="Gallery" />
      <TextContainer>
        <TextTitle>Company</TextTitle>
        <Text>useState를 사용하여 소개, 인사말, 비젼 & 미션, 연혁 탭을 클릭하면 각각의 컴포넌트를 보여준다.</Text>
      </TextContainer>
      <ProjectImg src="https://github.com/Qndtl/Portfolio/blob/master/public/projectImg/fourtop/4topcompany.PNG?raw=true" text="Company" />
      <TextContainer>
        <TextTitle>Upload</TextTitle>
        <Text>사진은 AWS S3에 저장을 하고 Prisma의 Post에는 AWS S3에 저장되어있는 사진의 url이 저장되어있다 &#40;multer, multer-s3사용&#41;</Text>
        <Text>이미지 파일을 선택하면 선택한 이미지 파일을 미리보여준다.</Text>
      </TextContainer>
      <ProjectImg src="https://github.com/Qndtl/Portfolio/blob/master/public/projectImg/fourtop/4topupload.PNG?raw=true" text="Upload" />
      <TextContainer>
        <TextTitle>Profile</TextTitle>
        <Text>사용자의 게시물 수, 팔로워 수, 팔로잉 수 등을 볼 수 있다.</Text>
        <Text>프로필이 자신인 경우에는 edit profile이 보여 프로필 변경이 가능하다.</Text>
        <Text>팔로워와 팔로우를 누르면 팔로워와 팔로우하는 사용자들을 오른쪽에 보이도록 하였다.</Text>
      </TextContainer>
      <ProjectImg src="https://github.com/Qndtl/Portfolio/blob/master/public/projectImg/fourtop/4topprofile.PNG?raw=true" text="Profile" />
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