// /components/Navbar.js

import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';

const CustomNavbar = () => {
    return (
        <Navbar bg="primary" variant="dark"> 
            <Container className="justify-content-center">
                <Nav className="m-auto"> 
                    <Nav.Link as={Link} href="/">FN APP</Nav.Link>
                    <Nav.Link as={Link} href="/login">Login</Nav.Link>
                    <Nav.Link as={Link} href="/register">Register</Nav.Link>
                    <Nav.Link as={Link} href="/search">Search Player</Nav.Link>
                    <Nav.Link as={Link} href="/shop">Shop</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;