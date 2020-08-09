import React from "react";
import styled from "styled-components";
import CountDown from 'ant-design-pro/lib/CountDown';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
`;

const TextContainer = styled.div`
  size: 15;
  margin-left: auto;
  margin-right: auto;

  margin-bottom: 15px;
`;

// https://docs.thecatapi.com/


function RandomCatImage(props) {

  const [catImageUrl, setCatImageUrl] = React.useState(null);
  var targetTime = new Date().getTime() + 31000;

  React.useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCatImageUrl(data[0].url);
      });
  }, []);

  if (catImageUrl == null) return <div> Loading </div>;


  return (
    <MainContainer>
      <TextContainer> 
        New cat image will appear in <CountDown target={targetTime} onEnd={() => { window.location.reload(false); }} > </CountDown> seconds 
      </TextContainer>
      
      <Image src={catImageUrl} />
    </MainContainer>
  );
}

export default RandomCatImage;
