import React from 'react';
import './technology.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDiscord, faNodeJs, faReact, faEnvira} from '@fortawesome/free-brands-svg-icons'
import {Container, Row, Col, Image} from 'react-bootstrap';
import Header from '../../common/sectionHeader/sectionHeader.js';
import Phone from '../../../media/phone-img.png';

function technology() {
    return (
        <section className = "technology" id = "technology">
            <Container>
                <Header effectType = "fade-up" headerText = "Technology" contentText = "Learn about the technology we used in our solution"></Header>
                <Row>
                    <Col data-aos = "fade-right"  lg = {4} className = "px-0 my-auto">
                        <Row className = "h-25">
                            <Col lg = {10} className = "text-right">
                                <h5>MangoDB</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Text of the printing and typesetting</p> 
                            </Col>
                            <Col lg = {2} className = "d-flex align-items-center justify-content-center">
                                <FontAwesomeIcon className = "mangoDB-icon" icon={faEnvira} size = "4x"></FontAwesomeIcon>
                            </Col>
                        </Row>
                        <Row className = "h-25">
                            <Col lg = {10} className = "text-right">
                                <h5>Express</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Text of the printing and typesetting</p> 
                            </Col>
                            <Col lg = {2} className = "d-flex align-items-center justify-content-center">
                                <h1 className = "display-2">ex</h1>
                            </Col>
                        </Row>
                        <Row className = "h-25">
                            <Col lg = {10} className = "text-right">
                                <h5>React</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Text of the printing and typesetting</p> 
                            </Col>
                            <Col lg = {2} className = "d-flex align-items-center justify-content-center">
                                <FontAwesomeIcon className = "react-icon" icon={faReact} size = "4x"></FontAwesomeIcon>
                            </Col>
                        </Row>
                    </Col>
                    <Col data-aos = "zoom-in" className = "mx-0" lg = {4}>
                        <div className = "phone-container mx-auto">
                            <Image src = {Phone} fluid></Image>
                        </div>
                    </Col>
                    <Col data-aos = "fade-left" lg = {4} className = "px-0 my-auto">
                        <Row className = "h-25">
                             <Col lg = {2} className = "d-flex align-items-center justify-content-center">
                                <FontAwesomeIcon className = "nodejs-icon" icon={faNodeJs} size = "4x"></FontAwesomeIcon>
                            </Col>
                            <Col lg = {10} className = "text-left">
                                <h5>Node.js</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Text of the printing and typesetting</p> 
                            </Col>
                        </Row>
                        <Row className = "h-25">
                            <Col lg = {2} className = "d-flex align-items-center justify-content-center">
                                <FontAwesomeIcon className = "discord-icon" icon={faDiscord} size = "4x"></FontAwesomeIcon>
                            </Col>
                            <Col lg = {10} className = "text-left">
                                <h5>Discord</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Text of the printing and typesetting</p> 
                            </Col>
                        </Row>
                        <Row className = "h-25">
                            <Col lg = {2} className = "d-flex align-items-center justify-content-center">
                                <h1 className = "display-5">hubs</h1>
                            </Col>
                            <Col lg = {10} className = "text-left">
                                <h5>Mozilla Hubs</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Text of the printing and typesetting</p> 
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default technology
