import React from 'react';
import './button.css';
import {Row, Col} from 'react-bootstrap';

function button({link, contentText, styleType, effectType}) {
    return (
        <div data-aos = {effectType} className = "button">
            <Row>
                <Col className = "d-flex justify-content-center mt-4">
                    <a href = {link} className = {`btn btn-xl d-block mx-auto ${styleType || ""}`}>{contentText}</a>
                </Col>
            </Row>
        </div>  
    )
}

export default button
