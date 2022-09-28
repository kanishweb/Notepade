// import {useEffect} from 'react'
import {useNavigate,useLocation } from "react-router-dom";
import Navbar from "../compound/MenuAppBar";
import Footer from "../compound/footer";
import Grid from '@mui/material/Grid';
import {Button } from "@mui/material";
import ModeEdit from '@mui/icons-material/ModeEdit';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';



const theme = createTheme();


function View() {

    const {state}=useLocation();
    const navigate=useNavigate();
   // const[task1,setTask1]=useState(item1);

  
   const handleEdit = (item) => {
		navigate('/note', { state: item });
	};

//    const deleteclick=(index)=>{

//     task1.splice(index, 1);
//     setTask1([...task1]);

//     alert('delete');

//   }

  return (
<div>
<Navbar />
<Container className='slide1' >
    <ThemeProvider theme={theme}>
      <Grid container component="main" style={{display:'inherit'}}>
       
        <Grid >
         
          <div >
          <div style={{height:50,backgroundColor:'#ffeb00',borderTopRightRadius:10,borderTopLeftRadius:10}}>
          <p  className='viewed'>Title </p>
          </div>
          <div style={{height:60}}>
          <p style={{color:'#000'}}>{state.title} </p>
          </div>
          <div style={{height:50,backgroundColor:'#ffeb00'}}>
          <p className='viewed'>Description </p>
          </div>
          <div style={{height:60}}>
          <p style={{color:'#000',}}>{state.description} </p>
          </div>
          </div>
         
        </Grid>
        
        <Button className='edit' variant="outlined"  startIcon={<ModeEdit />} onClick={()=>handleEdit(state)}  >
                                Edit
                            </Button>

      </Grid>
  </ThemeProvider>
  </Container>
  
  <Footer/>
</div>

     
  )
}

export default View;