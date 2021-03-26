import React from 'react';
import Navigation from '../common/navbar/navbar.js';
import Header from './header/header.js';
import Started from './started/started.js';
import Footer from '../common/footer/footer.js';

function home() {
    return (
        <>
            <Navigation></Navigation>
            <Header></Header>
            <Started></Started>
            <Footer></Footer>
        </>
    )
}

export default home
