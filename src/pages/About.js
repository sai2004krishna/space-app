import React from 'react';
import { AboutContainer, Heading, Description, APODLink } from '../styles/AboutContainer.Styled';

const AboutPage = () => {
  return (
    <AboutContainer>
      <Heading>About NASA APOD API</Heading>
      <Description>
        The Astronomy Picture of the Day (APOD) API is provided by NASA to deliver stunning images of the universe along with educational descriptions. 
        Each day, the APOD API provides a high-quality image or video with a brief explanation written by professional astronomers.
      </Description>
      <Description>
        The API allows developers to access the daily image, including its title, date, and description, for use in their applications. It’s a fantastic tool 
        for learning about astronomy and showcasing the beauty of the cosmos.
      </Description>
      <Description>
        You can explore more about NASA’s APOD API and get your own API key to integrate it into your projects by visiting the official 
        <APODLink href="https://api.nasa.gov" target="_blank" rel="noopener noreferrer">  NASA API portal</APODLink>.
      </Description>
    </AboutContainer>
  );
};

export default AboutPage;
