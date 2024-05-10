import React from 'react'
import Navbar from './Navbar';
import Container from './Container';

class LandingPage extends React.Component {
    render() {
        return (
            <div className='container-fluid d-flex flex-column px-0'>
                <Navbar />
                <Container />
            </div>
        )
    }
}
export default LandingPage;