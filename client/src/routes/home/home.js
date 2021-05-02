import React from 'react';
import './home.css';
import Navigation from '../common/navbar/navbar.js';
import Header from './header/header.js';
import About from './about/about.js';
import Started from './started/started.js';
import Technology from './technology/technology.js';
import Acknowledge from './acknowledgement/acknowledgement.js'
import Contact from './contact/contact.js';
import Footer from '../common/footer/footer.js';

function home() {
    return (
        <div className = "home-container">
            <Navigation></Navigation>
            <Header></Header>
            <About></About>
            <Technology></Technology>
            <Started></Started>
            <Acknowledge></Acknowledge>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    )
}

export default home
