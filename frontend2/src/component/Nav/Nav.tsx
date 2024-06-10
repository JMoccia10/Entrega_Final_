import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Nav.css';

function BasicExample() {
    return (
        <Navbar expand="xxl" className="bg-body-tertiary fixed-top" data-bs-theme="dark">
            <Container>
                <Nav.Link href="/" className="logo-link">
                    <img className="logo" src="./img/logo.png" height="50px" width="auto" alt="Logo" />
                </Nav.Link>
                <Navbar.Brand href="/" className="brand-text">Record Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Categorías" id="collapsible-nav-dropdown" className="nav-dropdown-hover">
                            <NavDropdown.Item href="#action/3.1">Rock & Roll</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Blues</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Jazz</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Pre Order</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/admin">Admin</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;