import { Navbar, Container, Nav } from 'react-bootstrap'
import './Navigation.css'
import { useEffect } from 'react'

function Navigation() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.nav-glassmorphism');
      if (window.scrollY > 50) {
        navbar.classList.add('nav-scrolled');
      } else {
        navbar.classList.remove('nav-scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar expand="lg" fixed="top" className="nav-glassmorphism">
      <Container>
        <Navbar.Brand href="#" className="nav-brand-wrapper">
          <span className="nav-brand-text">Kugatharshan</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="nav-toggle">
          <span className="nav-toggle-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-menu">
            <Nav.Link href="#about" className="nav-menu-item">About</Nav.Link>
            <Nav.Link href="#education" className="nav-menu-item">Education</Nav.Link>
            <Nav.Link href="#experience" className="nav-menu-item">Experience</Nav.Link>
            <Nav.Link href="#projects" className="nav-menu-item">Projects</Nav.Link>
            <Nav.Link href="#skills" className="nav-menu-item">Skills</Nav.Link>
            <Nav.Link href="#gallery" className="nav-menu-item">Gallery</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation