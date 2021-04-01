import React from 'react';
import './create.css';
import {Container, Row, Col, Form, DropdownButton, Dropdown} from 'react-bootstrap';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';
import Navigation from '../common/navbarInner/navbarInner.js';
import Header from '../common/sectionHeader/sectionHeader.js';
import Button from '../common/button/button.js';
import Footer from '../common/footer/footer.js';

function create() {
    return (
        <>
        <Navigation></Navigation>
        <section className = "create" id = "create">
            <Container>
                <Header styleType = "mt-5" effectType = "fade-up" headerText = "Create A Session" contentText = "Create a VR session"></Header>
                <ResponsiveEmbed aspectRatio="16by9">
                    <embed className = "embed" title = "mozilla" src="https://hubs.mozilla.com/wC84cL3?embed_token=35023d4d924c87911d5353ad934fe30f" allow="microphone; camera; vr; speaker; xr-spatial-tracking"></embed>
                </ResponsiveEmbed>
                <Row className = "d-flex align-items-center justify-content-center">
                    <Col data-aos = "fade-in" className = "py-2" lg = {6}>
                        <div className = "gap container-border">
                            <p className = "text-center">Select a VR enviroment type</p>
               
                                <Row className = "dropdown-box text-center d-flex align-items-start justify-content-center">
                                    <Col lg = {7}>
                                    <DropdownButton variant = "outline-primary" title="VR Enviroment">
                                        <Dropdown.Item href="#/action-1">Auditorium</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Durham University</Dropdown.Item>
                                    </DropdownButton>
                                    </Col>
                                </Row>
                                <Row>
                                <Col lg = {5} className = "mx-auto">
                                        <Button styleType = "btn-outline-grey" contentText = "Apply"></Button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col data-aos = "fade-in" className = "py-2" lg = {6}>
                        <div className = "gap container-border discord-bot d-flex align-items-center justify-content-center">
                            <div>
                                <h3 className = "graph-header-text text-center">Adding A Discord Bot</h3>
                                <p className = "text-center">Click the button below and follow the link to set-up a discord bot</p>
                                <Button styleType = "btn-outline-grey" link = "https://discord.com/oauth2/authorize?client_id=509129921826914304&permissions=536890368&scope=bot" contentText = "Add Discord Bot"></Button>
                            </div>
                            
                        </div>
                    </Col>
                </Row>
                
                <Row>
                    <Col data-aos = "fade-in" className = "py-2" lg = {12}>
                        <div className = "gap container-border">
                            <h3 className = "graph-header-text text-center">Inbox</h3>
                            <p className = "text-center">Enter link into the box below to active the session</p>
                            <Form className = "p-4">
                                <Row className = "mx-auto d-flex align-items-center justify-content-center">
                                    <Col lg = {6} className = "text-center px-0">
                                        <Form.Group controlId = "Link">
                                            <Form.Control className = "rounded" type = "Text" placeholder = "Username(s) - seperate users with a comma"></Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col lg = {6}>
                                        <Form.Group controlId = "Link">
                                            <Form.Control className = "rounded" type = "Text" placeholder = "Link - <iframe src = https://hubs.mozilla.com/..."></Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className = "mx-auto d-flex align-items-center justify-content-center">
                                    <Col lg = {12} className = "text-center px-0">
                                        <Button styleType = "btn-outline-grey" contentText = "Send Link"></Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Col>
                </Row>
                
            </Container>
        </section>
        <Footer></Footer>
        </>
            
        
    )
}

export default create
