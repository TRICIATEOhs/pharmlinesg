import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import homeData from '../data/home.js';

const MainNavbar = (props) => {

  const activeTab = props.activeTab;

  return (
    <>

      <Navbar expand="lg" className="bg-body-light">
        <Container>

          <Navbar.Brand>
            <Link className="navbar-brand" to={`${(activeTab === "/home") ? '/' : '/'}`}> <img className="logo" src={homeData[0].logo} alt="logo"/></Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <Nav.Link as={Link}
              className={`${(activeTab === "/home") ? 'active' : ''}`} 
              aria-current="page" 
              to={`${(activeTab === "/home") ? '/' : '/'}`}>
                Home
              </Nav.Link>

              <Nav.Link as={Link}
              className={`${(activeTab === "/about") ? 'active' : ''}`} 
              to={`${(activeTab === "/about") ? '/about' : '/about'}`}>
                About us
              </Nav.Link>

              <Nav.Link as={Link}
              className={`${(activeTab === "/products") ? 'active' : ''}`} 
              to={`${(activeTab === "/products") ? '/products/brain-boosters-memory-enhancers' : '/products/brain-boosters-memory-enhancers'}`}>
              Our products
              </Nav.Link>

              <Nav.Link as={Link}
              className={`${(activeTab === "/events") ? 'active' : ''}`} 
              to={`${(activeTab === "/events") ? '/events' : '/events'}`}>
              Events
              </Nav.Link>

              <Nav.Link as={Link}
              className={`${(activeTab === "/contact") ? 'active' : ''}`} 
              to={`${(activeTab === "/contact") ? '/contact' : '/contact'}`}>
                Contact us
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    
  );
}

export default MainNavbar;