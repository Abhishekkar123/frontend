import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link  } from 'react-router-dom';
import './header.css'
function Header() {
  return (
    <Navbar expand="lg" fixed="top" className="bg-transparent blur" >
      <Container>
        <Navbar.Brand as={Link} to="#" exact>PropertyEase</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home" exact>Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="#">Action 3.1</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#">Action 3.2</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#">Action 3.3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="#">Action 3.4</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
