import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../images/logo.png';

const MainNavbar = (props) => {

  const activeTab = props.activeTab;


  return (
    <>

      <Navbar expand="lg" className="bg-body-light">
        <Container>
          <Navbar.Brand>
            <Link className="navbar-brand" to={`${(activeTab === "/home") ? '/' : '/'}`}> <img className="logo" src={logo} alt="logo"/></Link>
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <Nav.Link>
                <Link className={`nav-link ${(activeTab === "/home") ? 'active' : ''}`} aria-current="page" to={`${(activeTab === "/home") ? '/' : '/'}`}> Home </Link>
              </Nav.Link>

              <Nav.Link>
                <Link className={`nav-link ${(activeTab === "/about") ? 'active' : ''}`} to={`${(activeTab === "/about") ? '/about' : '/about'}`}> About us </Link>
              </Nav.Link>

              <Nav.Link>
                <Link className={`nav-link ${(activeTab === "/products") ? 'active' : ''}`} to={`${(activeTab === "/products") ? '/products/brain-boosters-memory-enhancers' : '/products/brain-boosters-memory-enhancers'}`}> Our products </Link>
              </Nav.Link>

              <Nav.Link>
                <Link className={`nav-link ${(activeTab === "/events") ? 'active' : ''}`} to={`${(activeTab === "/events") ? '/events' : '/events'}`}> Events </Link>
              </Nav.Link>

              <Nav.Link>
              <Link className={`nav-link ${(activeTab === "/contact") ? 'active' : ''}`} to={`${(activeTab === "/contact") ? '/contact' : '/contact'}`}> Contact us </Link>
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    
  );
}

export default MainNavbar;