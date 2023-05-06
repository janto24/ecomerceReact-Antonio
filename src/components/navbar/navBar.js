import './navBar.css'
import CartWidget from "../CartWidget/CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, Link } from 'react-router-dom';

function Navigator() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              <img className="imgLogo" src="../img/lscarpia_logo.png" alt="Logo" />
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              <h4>La Scarpia Reale</h4>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/category/boca" activeClassName="ActiveOption">Boca</Nav.Link>
            <Nav.Link as={NavLink} to="/category/river" activeClassName="ActiveOption">River</Nav.Link>
            <Nav.Link as={NavLink} to="/category/racing" activeClassName="ActiveOption">Racing</Nav.Link>
            <Nav.Link as={NavLink} to="/category/independiente" activeClassName="ActiveOption">Independiente</Nav.Link>
            <Nav.Link as={NavLink} to="/category/rcentral" activeClassName="ActiveOption">R. Central</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default Navigator;
