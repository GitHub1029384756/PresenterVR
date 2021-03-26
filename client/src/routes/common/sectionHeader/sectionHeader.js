import React from 'react';
import './sectionHeader.css'

function sectionHeader({styleType, headerText, contentText, effectType}) {
    return (
        <div className = {`section-heading text-center ${styleType}`} data-aos = {effectType}>
            <h1>{headerText}</h1>
            <p>{contentText}</p>
        </div>
    )
}

export default sectionHeader
