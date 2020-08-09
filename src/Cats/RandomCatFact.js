import React from "react";
import styled from 'styled-components'

const CAT_FACT_API = 'https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextContainer = styled.div`
  width: 100%;
`;

function RandomCatFact(props) {
  const [catFactText, setCatFactText] = React.useState(null);

  const fetchData = () =>  {
    props.setTimeLeft(props.refreshTime);
    fetch(CAT_FACT_API)
      .then((response) => {
        return response.json();
      }) 
      .then((data) => {
        console.log(data);
        setCatFactText(data.text);
      });
  }

  React.useEffect(() => {
    fetchData();
  }, []);


  if(catFactText == null)
    return <div> Loading ... </div>;

  return (
    <MainContainer>
      {props.Timer('cat fact', props.timeLeft, fetchData)}
      <TextContainer> {catFactText} </TextContainer>
    </MainContainer>
  );
}

export default RandomCatFact;
