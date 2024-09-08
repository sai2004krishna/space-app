import styled from "styled-components";
import SpaceImage1 from "../images/4.svg";
export const Container=styled.div`
background-image: url(${SpaceImage1});
background-size: cover;
background-position: center;

  background-attachment: scroll;
width: 100vw;
height: 100vh;
position: relative;
overflow: hidden;
box-sizing: border-box;
margin: 0;
padding: 0;
@media (max-width: 768px) {
    background-position: top;
    background-size: cover;
  }

  @media (max-width: 480px) {
    background-position: top;
    background-size: cover;
  }
`;