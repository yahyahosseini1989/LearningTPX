import * as React from 'react';
import { Link } from 'react-router-dom';

export interface HeaderNavProps {

}

export interface HeaderNavState {

}

class HeaderNav extends React.Component<HeaderNavProps, HeaderNavState> {
    render() {
        return (
            <>
                {/* <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="/Home">React TSX</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/Home">Home</Nav.Link>
                        <Nav.Link href="/Users">Users</Nav.Link>
                        <Nav.Link href="/Register">Register</Nav.Link>
                        <Nav.Link href="/InvateFriends">Invate Friends</Nav.Link>
                        <Nav.Link href="/Buttons">Buttons</Nav.Link>
                        <Nav.Link href="/Uploaders">Uploaders</Nav.Link>
                    </Nav>
                </Navbar> */}
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div className="container">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link" >Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Users" className="nav-link" >Users</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/MyForm" className="nav-link" >Forms</Link>
                                </li>   
                                <li className="nav-item">
                                    <Link to="/MyForm2" className="nav-link" >MyForm2</Link>
                                </li>   
                                <li className="nav-item">
                                    <Link to="/Charge" className="nav-link" >Charge</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Uploaders" className="nav-link" >Uploaders</Link>
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