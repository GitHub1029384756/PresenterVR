import React from 'react';
import './error.css'
import {Container, Row, Col} from 'react-bootstrap';
import {XCircle} from 'react-feather';

function error() {
    return (
        <section className = "error d-flex align-items-center">
            <Container>
                <Row>
                    <Col className = "d-flex justify-content-center">
                        <XCircle className = "emblem" size = {50}></XCircle>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1 className = "text-center">Page doesn't exist!</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3 className = "text-center text-muted">Return to <a href = "/">home</a> page to continue</h3>
                    </Col>
                </Row>
            </Container>
            
        </section>
    )
}

export default error
