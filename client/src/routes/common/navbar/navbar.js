import React from 'react';
import './navbar.css';
import Emblem from '../../../media/logo-img.png';
import {Container, Nav, Navbar, Image} from 'react-bootstrap';

function Navigation() {
    return (
        <>
        <Navbar className = "main-navbar d-flex align-items-center justify-content-center" collapseOnSelect expand = "xl" sticky="top" variant="dark">
            <Container className = "mx-0">
                <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
                <Navbar.Brand className = "emblem mx-auto" href="/#home"><Image src = {Emblem} fluid></Image></Navbar.Brand>
                <Navbar.Collapse>
                    <Nav className = "mr-auto">
                        <Nav.Link className = "mx-lg-3 mr-md-3 ml-md-0" href = "/#about">About</Nav.Link>
                        <Nav.Link className = "mr-3" href = "/#technology">Technology</Nav.Link>
                        <Nav.Link className = "mr-3" href = "/#started">Getting Started</Nav.Link>
                        <Nav.Link className = "mr-3" href = "/#contact">Contact</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className = "mr-3" href = "/login">Login</Nav.Link>
                        <Nav.Link className = "mr-3" href = "/register">Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    )
}

export default Navigation