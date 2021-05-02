import React, {useState} from 'react';
import './join.css';
import {Container, Row, Col, Table, Form} from 'react-bootstrap';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';
import Navigation from '../common/navbarInner/navbarInner.js';
import Header from '../common/sectionHeader/sectionHeader.js';
import Entry from './components/entry.js';
import Button from '../common/button/button.js';
import Footer from '../common/footer/footer.js';

function Join() {

    const [link, setLink] = useState("")
    
    return (
        <>
        <Navigation></Navigation>
        <section className = "join" id = "join">
            <Container>
                <Header styleType = "mt-5" effectType = "fade-up" headerText = "Join A Session" contentText = "Join a VR session"></Header>
                <ResponsiveEmbed aspectRatio="16by9">
                    <iframe className = "embed" title = "mozilla" src= {link} allow="microphone; camera; vr; speaker; xr-spatial-tracking"></iframe>
                </ResponsiveEmbed>
                <Row>
                    <Col data-aos = "fade-in" className = "py-2" lg = {12}>
                        <div className = "gap container-border">
                            <p className = "text-center">Enter link into the box below to active the session</p>
                            <Form className = "p-4">
                                <Row className = "mx-auto d-flex align-items-center justify-content-center">
                                    <Col lg = {6} className = "text-center px-0">
                                    <Form.Group controlId = "Link">
                                            <Form.Control className = "rounded" type = "Text" placeholder = "https://hubs.mozilla.com/...."></Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col lg = {4}>
                                        <Button clickEffect = {() => setLink("https://hubs.mozilla.com/VN3sXzo?embed_token=e3e498051d58f87815b2c6d095ac24fd")} styleType = "btn-outline-grey" contentText = "Apply"></Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col data-aos = "fade-in" className = "py-2" lg = {12}>
                        <div className = "gap container-border">
                            <h3 className = "graph-header-text text-center">Inbox</h3>
                            <p className = "text-center">View invitations below</p>
                            <div className = "blocks">
                                <Table striped bordered hover>
                                    <thead><tr className = "text-center"><th>Host</th><th>Link</th></tr></thead>
                                    <tbody>
                                        <Entry host = "John_W"></Entry>
                                        <Entry host = "Ryan_K"></Entry>
                                        <Entry host = "Test_Account"></Entry>
                                        <Entry host = "Test_Account"></Entry>
                                        <Entry host = "Test_Account"></Entry>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <Footer></Footer>
        </>
            
        
    )
}

export default Join
