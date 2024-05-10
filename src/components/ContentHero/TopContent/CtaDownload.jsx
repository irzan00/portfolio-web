import React from 'react'

function CtaDownload() {
    return (
        <div className='cta-download d-flex'>
                <button className="cta-download__button">Download CV</button>
                <div className='sosmed d-flex'>
                    <img src="images/linkedin-logo.svg" alt="Linkedin" />
                    <img src="images/github-logo.svg" alt="Github" />
                    <img src="images/instagram-logo.svg" alt="Instagram" />
                </div>
        </div>
    )
}

export default CtaDownload;