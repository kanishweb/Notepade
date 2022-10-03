import React from 'react'
import Slider from "../components/Slider";
import Container from '@mui/material/Container';

function LandingPage() {
    return (
        <div>
            <Container className='slide1' >
                <Slider />
            </Container>
        </div>
    )
}

export default LandingPage