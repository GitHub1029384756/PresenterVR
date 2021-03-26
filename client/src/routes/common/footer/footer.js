import React from 'react';
import './footer.css'
import {Container} from 'react-bootstrap';

function footer() {
    return (
        <footer className =  "mastfooter d-flex align-items-center justify-content-center">
            <Container>
                <p>This website is intended for demonstration purposes only</p>
            </Container>
        </footer>
    )
}

export default footer
