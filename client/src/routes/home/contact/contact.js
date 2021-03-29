import React from 'react';
import './contact.css';
import {Container, Row, Col} from 'react-bootstrap';
import {Mail} from 'react-feather';
import Header from '../../common/sectionHeader/sectionHeader.js';

function contact() {
    return (
        <section className = "contact" id = "contact">
            <Container>
                <Header effectType = "fade-up" headerText = "Contact" contentText = "Having trouble using our solution. Contact us !"></Header>
                <Row className = "d-flex align-items-center justify-content-center">
                    <Col lg = {2} className = "text-center">
                        <a data-aos = "fade-down" className = "mail-1 mx-auto" href = "mailto:email@example.com"><Mail size = {42}></Mail></a>
                        <hr className = "w-50"></hr>
                        <h5 data-aos = "fade-up" className = "text-muted">Jiayuan Wang</h5>
                    </Col>
                    <Col lg = {2} className = "text-center">
                        <a  data-aos = "fade-down" className = "mail-2 mx-auto" href = "mailto:email@example.com"><Mail size = {42}></Mail></a>
                        <hr className = "w-50"></hr>
                        <h5 data-aos = "fade-up" className = "text-muted">Oskar Siwierski</h5>
                    </Col>
                    <Col lg = {2} className = "text-center">
                        <a data-aos = "fade-down" className = "mail-3 mx-auto" href = "mailto:email@example.com"><Mail size = {42}></Mail></a>
                        <hr className = "w-50"></hr>
                        <h5 data-aos = "fade-up" className = "text-muted">Ryan Key</h5>
                    </Col>
                </Row>
            </Container> 
        </section>
    )
}

export default contact
