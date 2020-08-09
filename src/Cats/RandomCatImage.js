import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
`;

// https://docs.thecatapi.com/


function RandomCatImage(props) {

  const [catImageUrl, setCatImageUrl] = React.useState(null);

  const fetchData = () =>  {
    props.setTimeLeft(props.refreshTime);
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCatImageUrl(data[0].url);
      });
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  if (catImageUrl == null) return <div> Loading </div>;


  return (
    <MainContainer>
      {props.Timer('cat', props.timeLeft, fetchData)}
      <Image src={catImageUrl} />
    </MainContainer>
  );
}

export default RandomCatImage;
