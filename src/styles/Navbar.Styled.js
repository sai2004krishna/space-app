import styled from "styled-components";

export const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  background: rgba(20, 20, 20, 0.6);
  color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  transition: background 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  
  &:hover {
    background: rgba(10, 10, 10, 0.8); 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); 
  }
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  margin-right: 2rem;
  transition: color 0.3s ease, transform 0.3s ease; 
  
  &:hover {
    text-decoration: underline;
    color: #f0e68c; 
    transform: scale(1.1); 
  }
  

`;
