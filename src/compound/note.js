
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "./MenuAppBar";
import Swal from 'sweetalert2'
import Footer from "./footer";


function Add() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  
  const navigate = useNavigate();

  const [listed, setListed] = useState([]);

  const inputchange = (e) => {
    setTitle(e.target.value)
  }

  const inputmail = (e) => {
    setDescription(e.target.value)
  }

  const addclick = () => {
   
    
    if (title === "") {
      Swal.fire(
        'The Internet?',
        'Enter your Title',
        'question'
      )
    
    }
    else if (description === "") {
      Swal.fire(
        'The Internet?',
        'Enter your Description',
        'question'
      )
     

    }
    else {

      setListed((oldData) => {
        let tempre = [...oldData, { 'id': listed.length + 1, 'title': title, 'description': description }]
        
        return (tempre)
        
      })
      Swal.fire(
        'Good job!',
        'Your Entry is Success!',
        'success'
      )
      // navigate('/addlist',{state:listed}) 
    }

    setTitle('');
    setDescription('');


  }
  const add= (e ) => {
    
    addclick()
    navigate('/home',{state:listed})
  }
  const view= (props ) => {
    
    addclick(props )
    navigate('/home',{state:listed})
  }
  const edit= (props ) => {
    
    addclick(props )
    navigate('/home',{state:listed})
  }



 

  return (
    <div>
    <Navbar />
    <div className='slide1'>
      <h3 className='h3tx'> CLG School Notepade</h3>
      <div>
        <input className='textview2' name='title' type='text' value={title} onChange={(e) => inputchange(e)} placeholder='Enter your Titel' required/><br /><br />
        <textarea   className='textview2' name='description' type='text' value={description} onChange={(e) => inputmail(e)} placeholder='Enter your Description' required data-editor-type="wmd"  cols="42" rows="5" tabindex="101" data-min-length=""></textarea><br /><br />
        <button className='exbtn' onClick={()=> add()} >Add</button>
       
      </div>

   

    </div>
    <Footer/>
    </div>
  );

}

export default Add;
