import * as React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export interface HeaderNavProps {

}

export interface HeaderNavState {

}

class HeaderNav extends React.Component<HeaderNavProps, HeaderNavState> {
    render() {
        return (
            <>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="#home">React TSX</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Navbar>
            </>
        );
    }
}

export default HeaderNav;