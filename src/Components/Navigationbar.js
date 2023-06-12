import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Figure from 'react-bootstrap/Figure';

function Navigationbar() {
  return (
    <Navbar bg="light" expand="lg" className='navbar navbar-light'>
      <Container>
        <Navbar.Brand href="#home">
          <Figure.Image className='me-4'
            width={60}
            height={60}
            alt="171x180"
            src="https://picsum.photos/60/60"
          />
          <span className="navbar-brandname">Sanctuary </span>Lands</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar-toggler' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav ms-auto mb-2 mb-lg-0">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Lands</Nav.Link>
            <Nav.Link href="#link">Branches</Nav.Link>
            <Nav.Link href="#link">Feedback</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;