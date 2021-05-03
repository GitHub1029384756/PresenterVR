import React, {useState} from 'react';
import './register.css';
import '../common/style/global.css';
import {UserPlus} from 'react-feather';
import axios from 'axios';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import Navigation from '../common/navbar/navbar.js';
import Footer from '../common/footer/footer.js';

function Register() {

    const validatePassword = (password) =>{
        return /[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password) && password.length >= 8 && password.length <= 20;
      };

    const validation = (event) =>{
        event.preventDefault();
        if(!validatePassword(event.currentTarget.elements.password.value)){
            setError("Your password is invalid (must include uppercase letter(s), lowercase letter(s), number(s) and be between 8 - 20 characters")
            return false
        }
        else if(event.currentTarget.elements.password.value !== event.currentTarget.elements.confirm.value){
            setError("Confirmation password doesn't match")
            return false
        };
        return true
    };

    const [error, setError] = useState(undefined);
   
    const handleSubmit = (event) =>{
        event.preventDefault();

        if(!validation(event)){
            return
        };
        
        axios({
            method: "POST",
            url: "register/auth",
            data: {username: event.currentTarget.elements.username.value, password: event.currentTarget.elements.password.value}
        })
        .then((response) =>{
            document.cookie = `Bearer=${response.data.access_token}`;
            window.location = "/support";
        })
        .catch((error) =>{
            if(error.response.status === 401){
                setError("Your password is invalid (must include uppercase letter(s), lowercase letter(s), number(s) and be between 8 - 20 characters")
            }
            else if(error.response.status === 409){
                setError("It appears you have an account with us, try logging-in")
            } 
            else if(error.response.status === 422){
                setError("You have not entered your username and/or password")
            }
        });
    };

    return (
        <>  
            <Navigation></Navigation>
            <section className = "register">
                <Container className = "h-100 d-flex align-items-center justify-content-center">
                    <Row className = "register-row">
                        <Col>
                            <Form data-aos = "fade-down" className = "form-box" onSubmit = {handleSubmit}>
                                <UserPlus className = "icon mx-auto d-flex justify-content-center" size = {100}></UserPlus>
                                <h3 className = "header-text text-center">Register</h3>
                                <Form.Group>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control className = "rounded" type = "Username" id = "username" placeholder = "Username"></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control className = "rounded" type = "password" id = "password" placeholder = "Password"></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control className = "rounded" type = "password" id = "confirm" placeholder = "Confirm Password"></Form.Control>
                                </Form.Group>
                                <Row className = "py-3">
                                    <Col>
                                        {(error !== undefined) ?  (<p className = "text-center error" data-aos = "fade-in">{error}</p>) : <></>}
                                    </Col>
                                </Row>
                                <Row  className = "pb-3">
                                    <Col className = "d-flex justify-content-center">
                                        <Button className = "button btn-outline-grey" type = "submit">Register</Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        {(error === "It appears you have an account with us, try logging-in") ? (<p className = "text-center" data-aos = "fade-in">Have an account? <a href = "/login">Login</a></p>) : <></>}
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

export default Register
