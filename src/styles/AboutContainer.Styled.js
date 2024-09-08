import styled, { keyframes } from 'styled-components';

const scaleIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const AboutContainer = styled.div`
  padding: 2rem;
  color: white;
  text-align: center;
  background: rgba(0, 0, 0, 0.8);
  min-height: calc(100vh - 4rem );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.h1`
  font-size: 3rem;
  font-family: 'League Spartan', sans-serif;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  animation: ${scaleIn} 1s ease-in-out forwards;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 800px;
  margin-bottom: 1rem;
  font-family: 'Georama', sans-serif;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: 0.5s; 
  opacity: 0; 

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1rem;
  }
`;

export const APODLink = styled.a`
  color: #1E90FF;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #87CEEB;
    text-decoration: underline;
  }
`;
