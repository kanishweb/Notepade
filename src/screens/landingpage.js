import React from 'react'
import Navbar from "../compound/MenuAppBar";
import Slider from "../compound/slider";
import Container from '@mui/material/Container';
import Footer from "../compound/footer";

function landingpage() {
    return (
        <div>
            <Navbar />
            <Container className='slide1' >
            <Slider />
            </Container>
            <Footer/>


        </div>
    )
}

export default landingpage