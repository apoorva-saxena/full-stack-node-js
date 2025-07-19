import { Navbar, Nav } from "react-bootstrap";

function NavBar({ activeTab, setActiveTab }) {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Black Rock(Preqin)</Navbar.Brand>
      <Nav
        className="me-auto"
        activeTab={activeTab}
        onSelect={(selectedKey) => setActiveTab(selectedKey)}
      >
        <Nav.Link eventKey="investors">Investors</Nav.Link>
        <Nav.Link eventKey="commitments">Commitment</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
