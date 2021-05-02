import React from 'react';
import './navbarInner.css';
import Emblem from '../../../media/logo-img.png';
import {Container, Nav, Navbar, Image} from 'react-bootstrap';
import {AlignLeft} from 'react-feather';

function Navigation() {
    return (
        <>
        <Navbar className = "inner-navbar d-flex align-items-center justify-content-center" collapseOnSelect expand = "xl" sticky="top" variant="dark">
            <Container className = "mx-0">
                <Navbar.Toggle className = "toggler" aria-controls="responsive-navbar-nav"><AlignLeft></AlignLeft></Navbar.Toggle>
                <Navbar.Brand className = "emblem mx-auto" href="/#home"><Image src = {Emblem} fluid></Image></Navbar.Brand>
                <Navbar.Collapse>
                    <Nav className = "mr-auto">
                        <Nav.Link className = "mx-lg-3 mr-md-3 ml-md-0" href = "/create">Create Session</Nav.Link>
                        <Nav.Link className = "mr-3" href = "/join">Join Session</Nav.Link>
                        <Nav.Link className = "mr-3" href = "/support">Support</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className = "mr-3" href = "/">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    )
}

export default Navigation