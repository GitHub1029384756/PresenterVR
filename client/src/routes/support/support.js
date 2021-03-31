import React from 'react';
import './support.css';
import {Container, Row, Col} from 'react-bootstrap';
import {List, Loader, Link, Send} from 'react-feather';
import Navigation from '../common/navbarInner/navbarInner.js';
import Header from '../common/sectionHeader/sectionHeader.js';
import Footer from '../common/footer/footer.js';

function support() {
    return (
        <>
        <Navigation></Navigation>
        <section className = "support" id = "support">
            <Container>
                <Header styleType = "mt-5" effectType = "fade-up" headerText = "Support" contentText = "Find out information about how to run our service"></Header>
                <Row data-aos = "fade-right" className = "mb-3">
                    <Col>
                        <h3 className = "text-center">Creating A Session</h3>
                        <p className = "text-lg-center text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'in the 1960s with the rel passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
                    </Col>
                </Row>
                <Row data-aos = "fade-left" className = "my-5">
                    <Col xs={{ span: 12, order: 2 }} lg = {{ span: 10, order: 1}}>
                        <h1 className = "text-lg-right text-center">Select a environment type from the dropdown</h1>
                        <p className = "text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
                    </Col>
                    <Col xs={{ span: 12, order: 1 }} lg = {{ span: 2, order: 2}} className = "d-flex justify-content-center">
                        <List className = "icon m-auto" size = {100}></List>
                    </Col>
                </Row>
                <hr className = "w-25"></hr>
                <Row data-aos = "fade-right" className = "my-5"> 
                    <Col lg = {2} className = "d-flex justify-content-center">
                        <Loader className = "icon m-auto" size = {100}></Loader>
                    </Col>
                    <Col lg = {10}>
                        <h1 className = "text-lg-left text-center">Wait for the environment to load</h1>
                        <p className = "text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
                    </Col>
                </Row>
                <hr className = "w-25"></hr>
                <Row data-aos = "fade-left" className = "my-5">
                    <Col xs={{ span: 12, order: 2 }} lg = {{ span: 10, order: 1}}>
                        <h1 className = "text-lg-right text-center">Press the invite button and copy the iframe link</h1>
                        <p className = "text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
                    </Col>
                    <Col xs={{ span: 12, order: 1 }} lg = {{ span: 2, order: 2}} className = "d-flex justify-content-center">
                        <Link className = "icon m-auto" size = {100}></Link>
                    </Col>
                </Row>
                <Row data-aos = "fade-right" className = "my-5"> 
                    <Col lg = {2} className = "d-flex justify-content-center">
                        <Send className = "icon m-auto" size = {100}></Send>
                    </Col>
                    <Col lg = {10}>
                        <h1 className = "text-lg-left text-center">Send the invite link to users from the inbox</h1>
                        <p className = "text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
                    </Col>
                </Row>
                <Row data-aos = "fade-left" className = "mb-3">
                    <Col>
                        <h3 className = "text-center">Join A Session</h3>
                        <p className = "text-lg-center text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'in the 1960s with the rel passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
                    </Col>
                </Row>
                
              
                   
         

            </Container>
        </section>
        <Footer></Footer>
        </>
            
        
    )
}

export default support
