import React from 'react';
import Navigation from '../common/navbar/navbar.js';
import Header from './header/header.js';
import About from './about/about.js';
import Started from './started/started.js';
import Technology from './technology/technology.js';
import Footer from '../common/footer/footer.js';

function home() {
    return (
        <>
            <Navigation></Navigation>
            <Header></Header>
            <About></About>
            <Started></Started>
            <Technology></Technology>
            <Footer></Footer>
        </>
    )
}

export default home
