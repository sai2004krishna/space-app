// App.js
import React from 'react';
import { Navbar, NavLink } from './styles/Navbar.Styled';
import { Container } from './styles/Container.Styled';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Apod from './pages/Apod';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Container>
        <Navbar>
          <NavLink as={Link} to="/">Home</NavLink>
          <NavLink as={Link} to="/apod">APOD</NavLink>
          <NavLink as={Link} to="/about">About</NavLink>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apod" element={<Apod />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
