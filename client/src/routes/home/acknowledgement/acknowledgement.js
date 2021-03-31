import React from 'react';
import './acknowledgement.css';
import {Container, Row, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDiscord, faNodeJs, faReact, faEnvira} from '@fortawesome/free-brands-svg-icons'
import Header from '../../common/sectionHeader/sectionHeader.js';


function acknowledgement() {
    return (
        <section className = "acknowledgement" id = "acknowledgement">
            <Container>
                <Header effectType = "fade-up" headerText = "Acknowledgement" contentText = "Acknowledgement of technologies and servies used to make our solution"></Header>
                <Row data-aos = "fade-right" className = "mb-3">
                    <Col>
                        <h3 className = "text-center">Main 3rd party resources Used</h3>
                        <p className = "text-lg-center text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'in the 1960s with the rel passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
                    </Col>
                </Row>
                <Row data-aos = "fade-right">  
                    <Col lg = {2} className = "text-center">
                        <FontAwesomeIcon className = "mangoDB-icon" icon={faEnvira} size = "4x"></FontAwesomeIcon>
                        <hr className = "w-50"></hr>
                        <a href = "https://www.mongodb.com/" className = "icon-text"><h5>MangoDB</h5></a>
                    </Col>
                    <Col lg = {2} className = "text-center">
                        <FontAwesomeIcon className = "discord-icon" icon={faDiscord} size = "4x"></FontAwesomeIcon>
                        <hr className = "w-50"></hr>
                        <a href = "https://discord.com/" className = "icon-text"><h5>Discord</h5></a>
                    </Col>
                    <Col lg = {2} className = "text-center">
                        <h1 className = "display-4">ex</h1>
                        <hr className = "w-50"></hr>
                        <a href = "https://expressjs.com/" className = "icon-text"><h5>Express.js</h5></a>
                    </Col>
                    <Col lg = {2} className = "text-center">
                        <FontAwesomeIcon className = "nodejs-icon" icon={faNodeJs} size = "4x"></FontAwesomeIcon>
                        <hr className = "w-50"></hr>
                        <a href = "https://nodejs.org/en/" className = "icon-text"><h5>Node.js</h5></a>
                    </Col>
                    <Col lg = {2} className = "text-center">
                        <h1 className = "display-4 hubs-icon">hubs</h1>
                        <hr className = "w-50"></hr>
                        <a href = "https://hubs.mozilla.com/" className = "icon-text"><h5>Mozilla Hubs</h5></a>
                    </Col>
                    <Col lg = {2} className = "text-center">
                        <FontAwesomeIcon className = "react-icon" icon={faReact} size = "4x"></FontAwesomeIcon>
                        <hr className = "w-50"></hr>
                        <a href = "https://reactjs.org/" className = "icon-text"><h5>React</h5></a>
                    </Col>
                </Row>
                <Row className = "mt-3">
                    <Col>
                        <h3 className = "text-center">Other 3rd party resources Used</h3>
                        <p className = "text-lg-center text-justify"><a className = "icon-text" href = "https://feathericons.com/">Feather Icons </a>•<a className = "icon-text" href = "https://github.com/feathericons/react-feather"> React Feather </a>• 
                        <a className = "icon-text" href = "https://fontawesome.com/"> Fontawesome </a>•<a className = "icon-text" href = "https://github.com/axios/axios"> Axios </a>•<a className = "icon-text" href = "https://www.npmjs.com/package/axios-hooks"> Axios Hooks </a>•
                        <a className = "icon-text" href = "https://github.com/michalsnik/aos"> AOS </a>•<a className = "icon-text" href = "https://github.com/woofers/react-wavify"> React Wavify </a>•  <a className = "icon-text" href = "https://getbootstrap.com/"> Bootstrap </a>•
                        <a className = "icon-text" href = "https://react-bootstrap.github.io/"> React Bootstrap </a>•<a className = "icon-text" href = "https://github.com/ReactTraining/react-router"> React Router </a>
                        </p> 
                    </Col>
                </Row>
                
            </Container>
        </section>
    )
}

export default acknowledgement
