import React from 'react'
import Navbar from "../compound/MenuAppBar";
import Footer from "../compound/footer";
import Container from '@mui/material/Container';
import Add from "../compound/notelist";

function home() {
  return (
    <div>
            <Navbar />
            <Container className='slide1' >
            <Add/>
            </Container>
            <Footer/>


        </div>
  )
}

export default home