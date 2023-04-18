import './navBar.css'
import CartWidget from "../CartWidget/CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'; // Lo tengo que usar!
import { NavLink, Link } from 'react-router-dom';

function Navigator () {
  return (
    <Navbar bg="light" expand="lg">
      <Container>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to='/'>
                <img className='imgLogo' src='../img/lscarpia_logo.png' />
          </Nav.Link>
          <Nav.Link as={Link} to='/'>
          <h4>La Scarpia Reale</h4>
          </Nav.Link>
          <Nav.Link as={Link} to={`/category/boca`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Boca</Nav.Link>
          <Nav.Link as={Link} to={`/category/river`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>River</Nav.Link>
          <Nav.Link as={Link} to={`/category/racing`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Racing</Nav.Link>
          <Nav.Link as={Link} to={`/category/independiente`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Independiente</Nav.Link>
          <Nav.Link as={Link} to={`/category/rcentral`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>R. Central</Nav.Link>  
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default Navigator;