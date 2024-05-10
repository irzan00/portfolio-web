import React from 'react'
import ContentHero from './ContentHero/ContentHero';
import AboutMe from './AboutMe/AboutMe';
import MyProject from './MyProject/MyProject';

function Container() {
    return (
        <div className='porto-container d-flex'>
           <ContentHero /> 
           <AboutMe />
           <MyProject />
        </div>
    )
}
export default Container;