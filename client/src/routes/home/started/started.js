import React from 'react';
import './started.css';
import {UserPlus, FilePlus, Link, LogIn} from 'react-feather';
import {Container, Row, Col} from 'react-bootstrap';
import Header from '../../common/sectionHeader/sectionHeader.js';
import Button from '../../common/button/button.js';

function started() {
    return (
        <section className = "started" id = "started">
            <Container>
                <Header effectType = "fade-up" headerText = "Getting Started" contentText = "Learn about how to use our solution"></Header>
                <Row data-aos = "fade-right" className = "my-5"> 
                    <Col lg = {2} className = "d-flex justify-content-center">
                        <UserPlus className = "icon m-auto" size = {100}></UserPlus>
                    </Col>
                    <Col lg = {10}>
                        <h1 className = "text-lg-left text-center">Register for an account</h1>
                        <p className = "text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
                    </Col>
                </Row>
                <hr className = "w-25"></hr>
                <Row data-aos = "fade-left" className = "my-5">
                    <Col xs={{ span: 12, order: 2 }} lg = {{ span: 10, order: 1}}>
                        <h1 className = "text-lg-right text-center">Create a new event session</h1>
                        <p className = "text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
                    </Col>
                    <Col xs={{ span: 12, order: 1 }} lg = {{ span: 2, order: 2}} className = "d-flex justify-content-center">
                        <FilePlus className = "icon m-auto" size = {100}></FilePlus>
                    </Col>
                </Row>
                <hr className = "w-25"></hr>
                <Row data-aos = "fade-right" className = "my-5"> 
                    <Col lg = {2} className = "d-flex justify-content-center">
                        <Link className = "icon m-auto" size = {100}></Link>
                    </Col>
                    <Col lg = {10}>
                        <h1 className = "text-lg-left text-center">Send the session link to a user</h1>
                        <p className = "text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
                    </Col>
                </Row>
                <hr className = "w-25"></hr>
                <Row data-aos = "fade-left" className = "my-5">
                    <Col xs={{ span: 12, order: 2 }} lg = {{ span: 10, order: 1}}>
                        <h1 className = "text-lg-right text-center">Enter the session link and join</h1>
                        <p className = "text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
                    </Col>
                    <Col xs={{ span: 12, order: 1 }} lg = {{ span: 2, order: 2}} className = "d-flex justify-content-center">
                        <LogIn className = "icon m-auto" size = {100}></LogIn>
                    </Col>
                </Row>
                <hr className = "w-25"></hr>
                <Button effectType = "fade-right" styleType = "btn-outline-grey" link = "/register" contentText = "Register Now"></Button>
            </Container>
            
        </section>
    )
}

export default started
