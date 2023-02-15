import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../netflix-clone/assets/logo.png";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  return (
    <Navbar className="w-100 mx-0" bg="dark" expand="lg">
      <Container className="mx-0 px-0 ">
        <img src={logo} className="App-logo" alt="logo" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="gap-3">
            <Link className="whenHover text-decoration-none" to="/tv-shows">
              TvShows
            </Link>
            <Link className="whenHover text-decoration-none" to="/matrix-saga">
              Matrix Saga
            </Link>
            <Link
              className="whenHover text-decoration-none"
              to="/lord-of-the-rings"
            >
              Lord of The Rings
            </Link>
            <Link
              className="whenHover text-decoration-none"
              to="/star-wars-saga"
            >
              Star Wars Saga
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
