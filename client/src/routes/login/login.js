import React from 'react';
import './login.css'
import {UserCheck} from 'react-feather'
import {Container, Row, Col, Form} from 'react-bootstrap';
import Navigation from '../common/navbar/navbar.js';
import Button from '../common/button/button.js';
import Footer from '../common/footer/footer.js';

function Login() {
    return (
        <>  
            <Navigation></Navigation>
            <section className = "login">
                <Container className = "h-100 d-flex align-items-center justify-content-center">
                    <Row className = "login-row">
                        <Col>
                            <Form data-aos = "fade-down" className = "form-box">
                                <UserCheck className = "icon mx-auto d-flex justify-content-center" size = {100}></UserCheck>
                                <h3 className = "header-text text-center">login</h3>
                                <Form.Group controlId = "Username">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control className = "rounded" type = "Username" placeholder = "Username"></Form.Control>
                                </Form.Group>
                                <Form.Group controlId = "Password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control className = "rounded" type = "password" placeholder = "Password"></Form.Control>
                                </Form.Group>
                                <Button styleType = "btn-outline-grey" link = "/support" contentText = "login"></Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer></Footer>
        </>
    )
}

export default Login
