// components/Navbar.js

import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';
import { useAuth } from '@/useAuth';

const CustomNavbar = () => {
    const { user, logout, isAuthenticated } = useAuth();

    return (
        <Navbar bg="primary" variant="dark"> 
            <Container className="justify-content-center">
                <Nav className="m-auto"> 
                    <Nav.Link as={Link} href="/">FN APP</Nav.Link>
                    {!isAuthenticated && (
                        <>
                            <Nav.Link as={Link} href="/login">Login</Nav.Link>
                            <Nav.Link as={Link} href="/register">Register</Nav.Link>
                        </>
                    )}
                    {isAuthenticated && (
                        <>
                            <Nav.Link as={Link} href="/search">Search Player</Nav.Link>
                            <Nav.Link as={Link} href="/shop">Shop</Nav.Link>
                            <Nav.Link onClick={logout}>Logout</Nav.Link>
                        </>
                    )}
                </Nav>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;