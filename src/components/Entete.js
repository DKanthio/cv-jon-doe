import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../App.css';
import { useLocation } from 'react-router-dom';

const Entete = () => {
  const [activeLink, setActiveLink] = useState(""); // État pour suivre le lien actif
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname); // Mettre à jour le lien actif en fonction de l'URL
  }, [location]);

  const style = {
    backgroundColor: '#EEE',
    color: '#444',
    fontFamily: 'Nunito Sans, sans-serif',
    fontWeight: 400,
  };
   
 

  const linkStyle = {
    color: '#444',
    textTransform: 'uppercase',
    transition: 'color 0.3s ease-in-out',
    fontWeight: 400,
  };

  const activeLinkStyle = {
    ...linkStyle,
    color: '#0d6efd', // Couleur spécifique pour l'élément actif
  };

  const activeClass = "active"; // Classe pour l'élément actif

  return (
    <Navbar expand="lg" style={style}>
      <Container>
        <Navbar.Brand href="/" style={{ color: '#000', fontWeight: 600 }}>
          CV de John Doe
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          <Nav.Link
  href="/blog"
  className={`${activeLink === '/blog' ? activeClass : ''} hover-effect`}
  style={{
    ...(activeLink === '/blog' ? activeLinkStyle : linkStyle),
  }}
>
  Blogs
</Nav.Link>

<Nav.Link
  href="/realisations"
  className={`${activeLink === '/realisations' ? activeClass : ''} hover-effect`}
  style={{
    ...(activeLink === '/realisations' ? activeLinkStyle : linkStyle),
  }}
>
  Réalisations
</Nav.Link>

<Nav.Link
  href="/service"
  className={`${activeLink === '/service' ? activeClass : ''} hover-effect`}
  style={{
    ...(activeLink === '/service' ? activeLinkStyle : linkStyle),
  }}
>
  Service
</Nav.Link>

<Nav.Link
  href="/contact"
  className={`${activeLink === '/contact' ? activeClass : ''} hover-effect`}
  style={{
    ...(activeLink === '/contact' ? activeLinkStyle : linkStyle),
  }}
>
  Contact
</Nav.Link>

<Nav.Link
  href="/legale"
  className={`${activeLink === '/legale' ? activeClass : ''} hover-effect`}
  style={{
    ...(activeLink === '/legale' ? activeLinkStyle : linkStyle),
  }}
>
  Mentions Légales
</Nav.Link>
            {/* Ajoutez d'autres liens de la même manière */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Entete;
