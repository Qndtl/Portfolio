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

const CoinChart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return <>
    <Helmet title="Portfolio | Coin Price Chart" />
    <Container>
      <Title>Coin Price Chart</Title>
      <ProjectImg src={'../../Portfolio/projectImg/coin_main.JPG'} text="코인 차트 첫 화면" />
      <TextContainer>
        <TextTitle>
          Intro
        </TextTitle>
        <Text>Coingecko에서 제공하는 API를 이용하여 axios로 데이터를 받아오고 코인의 정보를 보여주는 React 프로젝트이다.</Text>
      </TextContainer>
      <TextContainer>
        <TextTitle>
          Getting API
        </TextTitle>
        <Text>
          <a href="https://www.coingecko.com/en/api#explore-api">https://www.coingecko.com/en/api#explore-api</a>에서 따로 로그인 없이 api를 사용할 수 있다.
        </Text>
        <Text>
          Axios를 이용하여 코인의 정보를 가져온다.
        </Text>
      </TextContainer>
      <ProjectImg src={'../../Portfolio/projectImg/coinchart/coingecko.JPG'} text="Coin Gecko API" />
      <TextContainer>
        <TextTitle>
          Using API
        </TextTitle>
        <Text>
          Getting API에서 axios를 통해 가져온 코인들의 정보를 이용하여 코인의 이미지, market_cap, 현재 가격 등을 표에 표시해준다.
        </Text>
        <Text>
          검색 창에 코인의 이름을 입력하면 코인이 있으면 axios로 정보를 가져오고, 코인이 없으면 coin not found를 출력해준다.
        </Text>
      </TextContainer>
      <ProjectImg src={'../../Portfolio/projectImg/coinchart/search.JPG'} text="코인 검색 결과" />
      <TextContainer>
        <TextTitle>
          Result
        </TextTitle>
        <Text>
          코인을 클릭하면 코인에 대한 차트와 설명을 볼 수 있다.
        </Text>
        <Text>
          select 태그를 이용하여 1일부터 3년까지의 차트를 볼 수 있도록 하였다.
        </Text>
        <Text>
          코인 차트는 Chart JS를 사용하였다.
        </Text>
      </TextContainer>
      <ProjectImg src={'../../Portfolio/projectImg/coinchart/detail.png'} text="코인 상세 화면" />
      <GitLink>
        <GitHub size="48" />
        <span>Github Link</span>
        <a href="https://github.com/hyunduk-jo/coin-chart">CLIENT</a>
        <span>/</span>
        <a href="https://hyunduk-jo.github.io/coin-chart">GH_PAGES</a>
      </GitLink>
    </Container>
  </>
}

export default CoinChart;