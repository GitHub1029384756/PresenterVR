import React from 'react';
import './technology.css';
import {Container, Row, Col} from 'react-bootstrap';
import Header from '../../common/sectionHeader/sectionHeader.js';

function technology() {
    return (
        <section className = "technology" id = "technology">
            <Container>
                <Header effectType = "fade-up" headerText = "Technology" contentText = "Learn about the technology we used in our solution"></Header>
                

            </Container>
        </section>
    )
}

export default technology
