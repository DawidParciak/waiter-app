import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark" className="my-4 rounded" expand="lg">
      <Container>
        <Navbar.Brand href="/">Waiter.app</Navbar.Brand>
        <Nav>
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
