import * as React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink, Link } from 'react-router-dom';

export interface HeaderNavProps {

}

export interface HeaderNavState {

}

class HeaderNav extends React.Component<HeaderNavProps, HeaderNavState> {
    render() {
        return (
            <>
                {/* <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="#home">React TSX</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Navbar> */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a href="/" >
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/Users" >
                                        Users
                                    </a>
                                </li>
                                <li className="nav-item">
                                    2
                                </li>
                                <li className="nav-item">
                                    3
                                </li>
                                <li className="nav-item">
                                    4
                                </li>
                                <li className="nav-item">
                                    5
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default HeaderNav;