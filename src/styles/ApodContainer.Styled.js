import styled, { keyframes } from "styled-components";


const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ApodContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4rem;
  color: white;
  background: rgba(0, 0, 0, 0.6);
  height: calc(100vh - 4rem); 
  overflow: hidden;
  
  animation: ${fadeIn} 1s ease-out;
  box-sizing: border-box; 
`;

export const DateSelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem; 
  width: 100%; 
  box-sizing: border-box; 
`;

export const DateInput = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  color: rgba(150,150,150);
  border-radius: 3px;
  border-style: inset;

  
  margin-bottom: 1rem;
  width: 100%;
  max-width: 300px; 
  background: rgba(50, 50, 50, 0.6);
`;

export const FetchButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: solid black;
  border-radius: 1px;
  border-style: inset;
  font-family: "Share Tech Mono";
  background: #007bff;
  color: white;
  cursor: pointer;
  background: rgba(100, 100, 100, 0.4);
  transition: background 0.3s ease;

  &:hover {
    background:rgba(200, 200, 200, 0.4); ;
  }
`;

export const ApodContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem;
  max-width: 100%; 
  box-sizing: border-box; 
  margin-top: 1rem;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const ApodImageContainer = styled.div`
  max-width: 40%;
  margin-right: 2rem; 
`;

export const ApodImage = styled.img`
  max-width: 100%;
  max-height: 500px;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.6);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

export const ApodTitle = styled.h1`
  font-size: 2.5rem;
  font-family: 'League Spartan', sans-serif;
  margin-top: 2px;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  animation: ${fadeIn} 1s ease-out;
`;

export const ApodDescription = styled.p`
  font-size: 1.2rem;
  font-family: 'Open Sans', sans-serif;
  max-width: 600px;
  text-align: justify;
  margin: 0;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
  animation: ${fadeIn} 1s ease-out 0.5s; 
  opacity: 0.9;
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: rgba(255, 0, 0, 0.8);
  color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
  max-width: 60%;
  margin: 2rem auto;
`;

export const ErrorMessage = styled.p`
  font-size: 1.5rem;
  font-family: 'Georama', sans-serif;
  margin: 0;
  text-align: center;
  animation: ${fadeIn} 1s ease-out;
`;
