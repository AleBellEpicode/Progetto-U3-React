import { NavDropdown } from "react-bootstrap";
import { Container } from "react-bootstrap";

function UnderNavBar() {
  return (
    <Container className="mx-0 d-flex align-items-center">
      <span className="text-white px-0 fs-1">Categories</span>
      <NavDropdown
        className="dropDown ms-4 mt-3 text-white"
        title="Genres"
        id="basic-nav-dropdown"
      >
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Scifi</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Fantasy</NavDropdown.Item>
      </NavDropdown>
    </Container>
  );
}
export default UnderNavBar;
