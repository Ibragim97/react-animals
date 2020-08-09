import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
`;

// https://dog.ceo/dog-api/

const DOG_API = 'https://dog.ceo/api/breeds/image/random'

function RandomDogImage(props) {
  const [dogImageUrl, setDogImageUrl] = React.useState(null);


  const fetchData = () =>  {
    props.setTimeLeft(props.refreshTime);
    fetch(DOG_API)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data.message);
        setDogImageUrl(data.message);
      });
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  if (dogImageUrl == null) return <div> Loading .... </div>

  return (
      <MainContainer>
        {props.Timer('dog', props.timeLeft, fetchData)}
        <Image src={dogImageUrl} />
      </MainContainer>
  )


}

export default RandomDogImage;
