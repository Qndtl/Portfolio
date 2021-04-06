import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SkillsContainer = styled.div`
  display: none;
  width: 100%;
  height: 20%;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: rgba(0,0,0,0.8);
  position: absolute;
  bottom: -1px;
`;

const Container = styled.div`
  width: 600px;
  height: 380px;
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
  border-radius: 5px;
  &:hover{
    transform: scale(1.05);
    box-shadow: 0 0 10px gray, 0 0 20px gray;
    .SkillsContainer{
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 480px){
    width: 300px;
    height: 180px;
  }
`;

const ProgressLine = styled.div`
  background-color: red;
  color: white;
  font-size: 50px;
  font-weight: 600;
  height: 70px;
  width: 800px;
  text-align: center;
  transform: rotate(30deg);
  position: absolute;
  opacity: 0.7;
`;

const Text = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

const comeUp = keyframes`
  0%{
    opacity: 0;
    transform: translateY(40px);
  }
  50%{
    opacity: 0;
    transform: translateY(20px);
  }
  100%{
    opacity: 1;
    transform: translateY(0px);
  }
`;

const Skill = styled.div`
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
  width: 10%;
  height: 80%;
  border-radius: 50%;
  animation: ${comeUp} 100ms linear;
`;

const ProjectCard = ({ src, text, skills, inProgress, link }) => {
  return <Wrapper>
    <Link to={link}><Container src={src} >
      {
        inProgress ? <ProgressLine>IN PROGRESS</ProgressLine> : null
      }
      <SkillsContainer className="SkillsContainer">
        {
          skills.map((skill, i) => <Skill key={i} src={`../../Portfolio/skillsImg/${skill}.png`} />)
        }
      </SkillsContainer>
    </Container></Link>
    <Text>{text}</Text>
  </Wrapper>
}

export default ProjectCard;