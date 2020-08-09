import React from "react";
import styled from "styled-components";
import { Router } from "@reach/router";
import Header from "./Header/Header";
import HomePage from "./HomePage";
import RandomCatImage from "./Cats/RandomCatImage";
import RandomDogImage from "./Dogs/RandomDogImage";
import RandomCatFact from "./Cats/RandomCatFact";
import CountDown from 'ant-design-pro/lib/CountDown';
import "./App.css";

const MainContainer = styled.div`
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  display: flex;
`;

const TextContainer = styled.div`
  size: 15;
  margin-left: auto;
  margin-right: auto;

  margin-bottom: 15px;
`;

const REFRESH_TIME = () => {return new Date().getTime() + 5100;}

const Timer = (title, timeLeft, fetchData) => {
  return (
    <TextContainer> 
    New {title} image will appear in <CountDown target={timeLeft} onEnd={fetchData} > </CountDown> seconds 
  </TextContainer>
  )
}

function App() {
  const [timeLeft, setTimeLeft] = React.useState(REFRESH_TIME);

  return (
    <MainContainer>
      <Header />
      <Router>
        <HomePage path="/" />
        <RandomCatImage path="/randomCat" Timer={Timer} timeLeft={timeLeft} setTimeLeft={setTimeLeft} refreshTime={REFRESH_TIME}/>
        <RandomDogImage path="/randomDog" Timer={Timer} timeLeft={timeLeft} setTimeLeft={setTimeLeft} refreshTime={REFRESH_TIME}/>
        <RandomCatFact path="/catFact" Timer={Timer} timeLeft={timeLeft} setTimeLeft={setTimeLeft} refreshTime={REFRESH_TIME}/>
      </Router>
    </MainContainer>
  );
}

export default App;
