import React from 'react';
import './register.css';
import {UserPlus} from 'react-feather';
import {Container, Row, Col, Form} from 'react-bootstrap';
import Navigation from '../common/navbar/navbar.js';
import Button from '../common/button/button.js';
import Footer from '../common/footer/footer.js';

function Register() {
    return (
        <>  
            <Navigation></Navigation>
            <section className = "register">
                <Container className = "h-100 d-flex align-items-center justify-content-center">
                    <Row className = "register-row">
                        <Col>
                            <Form data-aos = "fade-down" className = "form-box">
                                <UserPlus className = "icon mx-auto d-flex justify-content-center" size = {100}></UserPlus>
                                <h3 className = "header-text text-center">Register</h3>
                                <Form.Group controlId = "Email">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control className = "rounded" type = "Username" placeholder = "Username"></Form.Control>
                                </Form.Group>
                                <Form.Group controlId = "Password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control className = "rounded" type = "password" placeholder = "Password"></Form.Control>
                                </Form.Group>
                                <Form.Group controlId = "ConfirmPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control className = "rounded" type = "password" placeholder = "Confirm Password"></Form.Control>
                                </Form.Group>
                                <Button styleType = "btn-outline-grey" link = "/" contentText = "Register"></Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer></Footer>
        </>
    )
}

export default Register
