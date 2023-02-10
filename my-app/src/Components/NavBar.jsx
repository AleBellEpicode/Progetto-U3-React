import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../netflix-clone/assets/logo.png";

function NavBar() {
  return (
    <Navbar className="w-100 mx-0" bg="dark" expand="lg">
      <Container className="mx-0 px-0 ">
        <img src={logo} className="App-logo" alt="logo" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="whenHover" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="whenHover" href="#link">
              Tv Shows
            </Nav.Link>
            <Nav.Link className="whenHover" href="#link">
              Movies
            </Nav.Link>
            <Nav.Link className="whenHover" href="#link">
              Recently Added
            </Nav.Link>
            <Nav.Link className="whenHover" href="#link">
              My List
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
