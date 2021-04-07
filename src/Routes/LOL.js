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

const LOL = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return <>
    <Helmet title="Portfolio | LOL Record" />
    <Container>
      <Title>LOL Record</Title>
      <ProjectImg src={'../../Portfolio/projectImg/lolrecord/firstpage.JPG'} text="롤 전적 검색 첫 화면" />
      <TextContainer>
        <TextTitle>
          Intro
        </TextTitle>
        <Text>리그 오브 레전드 전적 검색기로 소환사명으로 검색하여 최근 100 게임의 결과를 보여준다.</Text>
      </TextContainer>
      <TextContainer>
        <TextTitle>
          Getting API
        </TextTitle>
        <Text>
          소환사 이름으로 검색하여 소환사의 최근 100게임의 결과를 보여주기 위해서는 <a href="https://developer.riotgames.com/">https://developer.riotgames.com/</a>에 로그인 후 API key를 발급받아야 한다.
        </Text>
        <Text>
          Axios를 이용하여 소환사의 정보를 가져온다.
        </Text>
      </TextContainer>
      <ProjectImg src={'../../Portfolio/projectImg/lolrecord/developerpage.JPG'} text="Riot Developer Portal" />
      <TextContainer>
        <TextTitle>
          Using API
        </TextTitle>
        <Text>
          Getting API에서 axios를 통해 가져온 소환사의 정보를 이용하여 Riot Games 에서 제공하는 API를 이용해 게임에 대한 기록들을 가져온다.
        </Text>
        <Text>
          League에서는 소환사 정보중 encryptedSummonerId를 이용하여 솔로 랭크와 팀 랭크에 대한 정보를 가져온다.
        </Text>
        <Text>
          Match에서 최근 100게임의 gameId와 자신이 사용한 championId 등을 가져온다.
        </Text>
        <Text>
          위에서 가져온 gameId를 이용하여 각각의 게임에 대한 통계를 가져온다.
        </Text>
      </TextContainer>
      <ProjectImg src={'../../Portfolio/projectImg/lolrecord/apipage.JPG'} text="League of Legends apis" />
      <TextContainer>
        <TextTitle>
          Result
        </TextTitle>
        <Text>
          랭크 및 아이콘과 각 게임에서 사용한 아이템, 챔피언 등의 이미지를 가져온다.
        </Text>
        <Text>
          각 게임에 대한 정보와 아이템, 챔피언, 참가자 등을 불러온 이미지와 매칭하여 결과로 나타내준다.
        </Text>
        <Text>
          게임 결과에 따라 승리시 붉은색으로 나타내고 패배시 푸른색으로 나타내준다.
        </Text>
      </TextContainer>
      <ProjectImg src={'../../Portfolio/projectImg/lolrecord/searched.JPG'} text="소환사 검색 결과" />
      <GitLink>
        <GitHub size="48" />
        <span>Github Link</span>
        <a href="https://github.com/hyunduk-jo/lol-record-server">SERVER</a>
        <span>/</span>
        <a href="https://github.com/hyunduk-jo/lol-record-client">CLIENT</a>
        <span>/</span>
        <a href="https://lol-record.netlify.com">DEPLOY LINK</a>
      </GitLink>
    </Container>
  </>
}

export default LOL;