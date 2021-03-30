import React from 'react';
import './create.css';
import {Container, Row, Col} from 'react-bootstrap';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';
import Navigation from '../common/navbarInner/navbarInner.js';
import Header from '../common/sectionHeader/sectionHeader.js';
import Footer from '../common/footer/footer.js';

function create() {
    return (
        <>
        <Navigation></Navigation>
        <section className = "create" id = "create">
            <Container>
                <Header styleType = "mt-5" effectType = "fade-up" headerText = "Create Session" contentText = "Create and control a VR session"></Header>
              
                    <iframe title = "mozilla" src="https://hubs.mozilla.com/wC84cL3?embed_token=35023d4d924c87911d5353ad934fe30f" style={{width: "1024px", height: "768px"}} allow="microphone; camera; vr; speaker; xr-spatial-tracking"></iframe>
         

            </Container>
        </section>
        <Footer></Footer>
        </>
            
        
    )
}

export default create
