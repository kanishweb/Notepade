import React from 'react'
import Container from '@mui/material/Container';
import Add from "../pages/NoteList";

function Home() {
  return (
    <div>
      <Container className='slide1' >
        <Add />
      </Container>
    </div>
  )
}

export default Home