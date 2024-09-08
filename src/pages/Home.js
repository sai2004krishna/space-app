import React from 'react'
import { HomeContainer } from '../styles/HomeContainer.Styled'
import styled from 'styled-components';
import { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Title = styled.h1`
  font-size: 6rem;
  font-family: 'League Spartan', sans-serif; 
  margin-bottom: 1rem;
  opacity: 0; 
  animation: ${fadeIn} 1s ease-out forwards; 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    font-size: 4rem;
  }

  @media (max-width: 480px) {
    font-size: 3rem;
  }
`;

const Quote = styled.p`
  font-size: 1.5rem;
  font-family: 'Georama', sans-serif; 
  opacity: 0; 
  animation: ${fadeIn} 1s ease-out 0.5s forwards; 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

function Home() {
  return (
    <HomeContainer>
        <Title>Explore Space</Title>
        <Quote>“The universe is not only stranger than we imagine, it is stranger than we can imagine.”</Quote>
        
    </HomeContainer>
  )
}

export default Home