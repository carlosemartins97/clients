import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import './styles.css';

const MainNav = () => {
    return (
        <div className="navbar-container">
            <Navbar variant="light" bg="warning" expand="lg" className="main-nav font-weight-bold">
                <Navbar.Brand href="/">Listz</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav nav-block">
                    <Nav className="mx-auto nav-items">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Consulta</Nav.Link>
                        <Nav.Link href="#teste">Lista Completa</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default MainNav;