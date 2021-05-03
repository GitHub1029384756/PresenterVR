import React, {useState} from 'react';
import './login.css';
import '../common/style/global.css';
import {UserCheck} from 'react-feather'
import axios from 'axios';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import Navigation from '../common/navbar/navbar.js';
import Footer from '../common/footer/footer.js';

function Login() {
    const [error, setError] = useState(undefined);
   
    const handleSubmit = (event) =>{
        event.preventDefault();
        axios({
            method: "POST",
            url: "login/auth",
            data: {username: event.currentTarget.elements.username.value, password: event.currentTarget.elements.password.value}
        })
        .then((response) =>{
            document.cookie = `Bearer=${response.data.access_token}`;
            window.location = "/support";
        })
        .catch((error) =>{
            if(error.response.status === 401){
                setError("You have entered an incorrect password")
            }
            else if(error.response.status === 404){
                setError("It appears you don't have an account with us, try registering")
            } 
            else if(error.response.status === 422){
                setError("You have not entered your username and/or password")
            }
        });
    };

    return (
        <>  
            <Navigation></Navigation>
            <section className = "login">
                <Container className = "h-100 d-flex align-items-center justify-content-center">
                    <Row className = "login-row">
                        <Col>
                            <Form data-aos = "fade-down" className = "form-box" onSubmit = {handleSubmit}>
                                <UserCheck className = "icon mx-auto d-flex justify-content-center" size = {100}></UserCheck>
                                <h3 className = "header-text text-center">Register</h3>
                                <Form.Group>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control className = "rounded" type = "Username" id = "username" placeholder = "Username"></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control className = "rounded" type = "password" id = "password" placeholder = "Password"></Form.Control>
                                </Form.Group>
                                <Row className = "py-3">
                                    <Col>
                                        {(error !== undefined) ?  (<p className = "text-center error" data-aos = "fade-in">{error}</p>) : <></>}
                                    </Col>
                                </Row>
                                <Row  className = "pb-3">
                                    <Col className = "d-flex justify-content-center">
                                        <Button className = "button btn-outline-grey" type = "submit">Login</Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        {(error === "It appears you don't have an account with us, try registering") ? (<p className = "text-center" data-aos = "fade-in">Don't have an account? <a href = "/register">Register</a></p>) : <></>}
                                    </Col>
                                </Row>
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
