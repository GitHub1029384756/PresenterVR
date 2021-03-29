import React from 'react';
import './about.css';
import {Container, Row, Col, Image} from 'react-bootstrap';
import Header from '../../common/sectionHeader/sectionHeader.js';
import VR from '../../../media/vr-img.png';
import Pollusion from '../../../media/pollution-img.jpg';
import Exspense from '../../../media/expense-img.jpg';
import Teamwork from '../../../media/collaboration-img.jpeg';

function about() {
    return (
        <section className = "about" id = "about">
            <Container>
                <Header effectType = "fade-up" headerText = "about" contentText = "Learn a little more about our solution"></Header>
                <Row>
                    <Col lg = {12} className = "d-flex justify-content-center">
                        <div className = "vr-container">
                            <Image data-aos = "zoom-in" src = {VR} fluid></Image>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg = {12} data-aos = "fade-up" className = "text-center">
                        <h1 className = "text-center">An Intergrated VR Presentation Enviroment</h1>
                        <p className = "text-lg-center text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
                    </Col>
                </Row>
                <Row data-aos = "fade-right" className = "border-box my-4">
                    <Col lg = {4} className = "px-0">
                        <Image src = {Pollusion} fluid></Image>
                        <h1 className = "text-centered text-center text-white">Enviroment</h1>
                    </Col>
                    <Col lg = {4} className = "px-0">
                        <Image src = {Exspense} fluid></Image>
                        <h1 className = "text-centered text-center text-white">Exspense</h1>
                    </Col>
                    <Col lg = {4} className = "px-0">
                        <Image src = {Teamwork} fluid></Image>
                        <h1 className = "text-centered text-center text-white">Teamwork</h1>
                    </Col>
                </Row>
                <Row>
                    <Col lg = {12} data-aos = "fade-up">
                        <h1 className = "text-center">Targetting key issues</h1>
                        <p className = "text-lg-center text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default about
