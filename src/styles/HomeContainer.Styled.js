import styled from "styled-components";

export const HomeContainer = styled.div`
padding-top: 2rem;
  color: white;
  text-align: center;
  background: rgba(0, 0, 0, 0.6); 
  height: calc(100vh - 4rem); 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
    height: 100vh;
  }
`;
