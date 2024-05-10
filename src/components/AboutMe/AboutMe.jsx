import React from 'react'
import AboutContent from './AboutContent';

function AboutMe() {
    return (
        <div className='about-me w-100 d-flex flex-column flex-xl-row'>
            <img src="images/myphoto.png" alt="MY PHOTO" style={{ width: "285px" }} />
            <AboutContent />
        </div>
    )

}

export default AboutMe;