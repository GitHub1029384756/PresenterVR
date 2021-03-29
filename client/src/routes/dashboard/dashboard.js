import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Navigation from '../common/navbarInner/navbarInner.js';
import Header from '../common/sectionHeader/sectionHeader.js';
import Footer from '../common/footer/footer.js';

function dashboard() {
    return (
        <>
        <Navigation></Navigation>
        <section clasName = "dashboard" id = "dashboard">
            <Container>
                <Header styleType = "mt-5" effectType = "fade-up" headerText = "Dashboard" contentText = "Create, control and access VR sessions"></Header>
            </Container>
        </section>
        <Footer></Footer>
        </>
            
        
    )
}

export default dashboard


