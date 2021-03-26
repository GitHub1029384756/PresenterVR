import React from 'react';
import './header.css';
import {Container, Row, Col} from 'react-bootstrap';
import Wave from 'react-wavify'

function header() {
    return (
        <>
        <header className = "header d-flex align-items-end justify-content-center" id = "home">
            <Container fluid>
                <Row>
                    <Col data-aos = "fade-right" className = "mt-5 d-flex justify-content-center">
                        <h1 className = "text-center" >A new way to connect with people<h5 className = "text-center">the next generation of communication</h5></h1>
                       
                    </Col>
                </Row> 
            </Container>  
        </header>
        <Container className = "wave-container px-0" fluid>
            <Wave className = "wave" fill='#00B0F0' options={{height: 60, amplitude: 25, speed: 0.15, points: 3}}></Wave>
            <Wave className = "wave" fill='#21242C' options={{height: 90, amplitude: 40, speed: 0.15, points: 3}}></Wave>
        </Container>
        </>
    )
}

export default header
