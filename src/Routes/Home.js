import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import styled, { keyframes } from "styled-components";
import AboutCard from "../Components/About";
import Header from "../Components/Header";
import { Email, GitHub } from "../Components/Icons";
import ProjectCard from "../Components/ProjectCard";
import SendEmailCom from "../Components/SendEmail";
import SkillsCard from "../Components/Skills";

const Container = styled.div``;

const fadeIn = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

const About = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation:${fadeIn} 2s linear;
  margin: 30px 0px 100px 0px;
`;

const AboutContainer = styled.div`
  width: 80vw;
  height: 90vh;
  margin-top: 40px;
  box-shadow: 0 0 10px black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  button{
    width: 150px;
    height: 50px;
    background-color: #292e49;
    text-align: center;
    color: #F6EDDC;
    font-weight: 600;
  }
  position: relative;
  @media screen and (max-width: 480px){
    margin-top: 20px;
  }
  background: linear-gradient(to left, #536976, #292e49);
  color: #F6EDDC;
`;

const ShowContainer = styled.div`
  width: 80%;
  height: 80%;
  position: absolute;
  button{
    position: absolute;
    right: 0px;
    bottom: 0px;
    @media screen and (max-width: 480px){
      margin-top: 50px;
    }
  }
`;

const Projects = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 100px;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 90%;
  min-height: 65vh;
  @media screen and (max-width: 480px){
    width: 90%;
  }
`;

const Contact = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;

const ContactContainer = styled.div`
  border: 10px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  width: 700px;
  min-height: 25vh;
  @media screen and (max-width: 1200px){
    width: 450px;
  }
  @media screen and (max-width: 480px){
    width: 90%;
  }
`;

const Title = styled.div`
  font-size: 60px;
  font-weight: 600;
  margin-top: 20px;
  border-bottom: 12px solid rgba(247, 202, 24, 0.7);
  line-height: 60%;
  @media screen and (max-width: 480px){
    margin-top: 0px;
  }
`;

const EmailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -100px;
  @media screen and (max-width: 480px){
    margin-left: -75px;
  }
`;

const GitHubContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Text = styled.div`
  margin-left: 15px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  @media screen and (max-width: 480px){
    font-size: 15px;
  }
  span{
    color: blue;
  }
`;

const Home = ({ aboutRef, projectsRef, contactRef }) => {
  const lolSkills = ['express', 'react'];
  const coinSkills = ['react'];
  const spSkills = ['mongodb', 'graphql', 'passport', 'express', 'react'];
  const instaSkills = ['prisma', 'apollo', 'react', 'graphql', 'passport'];
  const fourtopSkills = ['prisma', 'apollo', 'react', 'graphql', 'passport'];

  const [opacity, setOpacity] = useState(true);
  const opacityRef = useRef();
  const opacityRef2 = useRef();
  const onClick = () => {
    if (opacity) {
      setOpacity(false);
    } else {
      setOpacity(true);
    }
  }
  useEffect(() => {
    if (opacity) {
      opacityRef.current.style.transitionDuration = '0.7s';
      opacityRef.current.style.opacity = '1';
      setTimeout(() => (opacityRef.current.style.display = 'block'), 600);
      opacityRef2.current.style.transitionDuration = '0.7s';
      opacityRef2.current.style.opacity = '0';
      setTimeout(() => (opacityRef2.current.style.display = 'none'), 600);
    } else {
      opacityRef.current.style.transitionDuration = '0.7s';
      opacityRef.current.style.opacity = '0';
      setTimeout(() => (opacityRef.current.style.display = 'none'), 600);
      opacityRef2.current.style.transitionDuration = '0.7s';
      opacityRef2.current.style.opacity = '1';
      setTimeout(() => (opacityRef2.current.style.display = 'block'), 600);
    }
  }, [opacity])

  const [mail, setMail] = useState(false);

  return <>
    <Helmet title="Portfolio | Home" />
    <Header aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} />
    <Container>
      <About ref={aboutRef}>
        <Title>About Me</Title>
        <AboutContainer>
          <ShowContainer ref={opacityRef}>
            <AboutCard />
            <button onClick={onClick}>Skills</button>
          </ShowContainer>
          <ShowContainer ref={opacityRef2}>
            <SkillsCard />
            <button onClick={onClick}>Back</button>
          </ShowContainer>
        </AboutContainer>
      </About>
      <Projects ref={projectsRef}>
        <Title>Projects</Title>
        <ProjectsContainer>
          <ProjectCard link="/project/lol" src={'../../Portfolio/projectImg/lol_main.JPG'} text="LOL Record Search" skills={lolSkills} inProgress={false} />
          <ProjectCard link="/project/coin" src={'../../Portfolio/projectImg/coin_main.JPG'} text="Coin Price Chart" skills={coinSkills} inProgress={false} />
          <ProjectCard link="/project/simplepost" src={'../../Portfolio/projectImg/SP_auth.JPG'} text="Simple Posting" skills={spSkills} inProgress={false} />
          <ProjectCard link="/project/instaclone" src={'../../Portfolio/projectImg/insta_clone.JPG'} text="Instagram Clone" skills={instaSkills} inProgress={false} />
          <ProjectCard link="/project/fourtop" src={'../../Portfolio/projectImg/fourTop_home.png'} text="Four Top" skills={fourtopSkills} inProgress={true} />
        </ProjectsContainer>
      </Projects>
      <Contact ref={contactRef}>
        <Title>Contact</Title>
        <ContactContainer>
          <EmailContainer>
            <Email size="40" />
            <Text onClick={() => setMail(!mail)}><span>johd321@naver.com</span></Text>
          </EmailContainer>
          <GitHubContainer>
            <a href='https://github.com/hyunduk-jo'><GitHub size="40" /></a>
            <Text><a href='https://github.com/hyunduk-jo'><span>https://github.com/hyunduk-jo</span></a></Text>
          </GitHubContainer>
        </ContactContainer>
        {
          mail ? (
            <ContactContainer>
              <Text>Send Email</Text>
              <SendEmailCom />
            </ContactContainer>
          ) : null
        }
      </Contact>
    </Container>
  </>
}

export default Home;