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

function RandomCatFact() {
  const [catFactText, setCatFactText] = React.useState(null);

  React.useEffect(() => {
    fetch(CAT_FACT_API)
      .then((response) => {
        return response.json();
      }) 
      .then((data) => {
        console.log(data);
        setCatFactText(data.text);
      });
  }, []);


  if(catFactText == null)
    return <div> Loading ... </div>;

  return (
    <MainContainer>
      <TextContainer> {catFactText} </TextContainer>
    </MainContainer>
  );
}

export default RandomCatFact;
