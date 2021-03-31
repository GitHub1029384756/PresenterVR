import React from 'react';
import './join.css';
import {Container, Row, Col, Table, Form} from 'react-bootstrap';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';
import Navigation from '../common/navbarInner/navbarInner.js';
import Header from '../common/sectionHeader/sectionHeader.js';
import Entry from './components/entry.js';
import Button from '../common/button/button.js';
import Footer from '../common/footer/footer.js';

function join() {
    return (
        <>
        <Navigation></Navigation>
        <section className = "join" id = "join">
            <Container>
                <Header styleType = "mt-5" effectType = "fade-up" headerText = "Join A Session" contentText = "Join a VR session"></Header>
                <ResponsiveEmbed aspectRatio="16by9">
                    <embed className = "embed" title = "mozilla" src="https://hubs.mozilla.com/wC84cL3?embed_token=35023d4d924c87911d5353ad934fe30f" allow="microphone; camera; vr; speaker; xr-spatial-tracking"></embed>
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
                                        <Button styleType = "btn-outline-grey" link = "/register" contentText = "Apply"></Button>
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
                                    <thead><tr className = "text-center"><th>Date</th><th>Time</th><th>Host</th><th>Link</th><th>Status</th></tr></thead>
                                    <tbody>
                                        <Entry statusType = "active" date = "02/03/2021" time = "14:30 - 21:30" host = "Ryan K" status = "Active"></Entry>
                                        <Entry statusType = "closed" date = "02/03/2021" time = "14:30 - 21:30" host = "Ryan K" link = "1234" status = "Closed"></Entry>
                                        <Entry statusType = "closed" date = "02/03/2021" time = "14:30 - 21:30" host = "Ryan K" link = "1234" status = "Closed"></Entry>
                                        <Entry statusType = "closed" date = "02/03/2021" time = "14:30 - 21:30" host = "Ryan K" link = "1234" status = "Closed"></Entry>
                                        <Entry statusType = "closed" date = "02/03/2021" time = "14:30 - 21:30" host = "Ryan K" link = "1234" status = "Closed"></Entry>
                                        <Entry statusType = "closed" date = "02/03/2021" time = "14:30 - 21:30" host = "Ryan K" link = "1234" status = "Closed"></Entry>
                                        <Entry statusType = "closed" date = "02/03/2021" time = "14:30 - 21:30" host = "Ryan K" link = "1234" status = "Closed"></Entry>
                                        <Entry statusType = "closed" date = "02/03/2021" time = "14:30 - 21:30" host = "Ryan K" link = "1234" status = "Closed"></Entry>
                                        <Entry statusType = "closed" date = "02/03/2021" time = "14:30 - 21:30" host = "Ryan K" link = "1234" status = "Closed"></Entry>
                                        <Entry statusType = "closed" date = "02/03/2021" time = "14:30 - 21:30" host = "Ryan K" link = "1234" status = "Closed"></Entry>
                                        <Entry statusType = "closed" date = "02/03/2021" time = "14:30 - 21:30" host = "Ryan K" link = "1234" status = "Closed"></Entry>
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

export default join
