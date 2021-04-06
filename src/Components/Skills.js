import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 90%;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 50px;
  @media screen and (max-width: 480px){
    height: 80%;
  }
`;

const FrontendContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const BackendContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const SkillContainer = styled.div`
  height: 80%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr;
  place-items: center;
`;

const Text = styled.div`
  font-size: 50px;
  font-weight: 600;
  color: #F6EDDC;
`;

const Skill = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: white;
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
  @media screen and (max-width: 1000px){
    width: 100px;
    height: 100px;
  }
  @media screen and (max-width: 800px){
    width: 80px;
    height: 80px;
  }
  @media screen and (max-width: 600px){
    width: 60px;
    height: 60px;
  }
  @media screen and (max-width: 480px){
    width: 40px;
    height: 40px;
  }
`;


const SkillsCard = () => {
  return <>
    <Container>
      <FrontendContainer>
        <Text>Front-end</Text>
        <SkillContainer>
          <Skill src="../../Portfolio/skillsImg/html.png" />
          <Skill src="../../Portfolio/skillsImg/css.png" />
          <Skill src="../../Portfolio/skillsImg/javascript.png" />
          <Skill src="../../Portfolio/skillsImg/react.png" />
          <Skill src="../../Portfolio/skillsImg/styledComponent.png" />
        </SkillContainer>
      </FrontendContainer>
      <BackendContainer>
        <Text>Back-end</Text>
        <SkillContainer>
          <Skill src="../../Portfolio/skillsImg/express.png" />
          <Skill src="../../Portfolio/skillsImg/mongodb.png" />
          <Skill src="../../Portfolio/skillsImg/graphql.png" />
          <Skill src="../../Portfolio/skillsImg/apollo.png" />
          <Skill src="../../Portfolio/skillsImg/prisma.png" />
          <Skill src="../../Portfolio/skillsImg/passport.png" />
        </SkillContainer>
      </BackendContainer>
    </Container>
  </>
}

export default SkillsCard;