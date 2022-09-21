import './App.css';
///import Navbar from "./compound/navbar";
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Landingpage from "./screens/landingpage";
import ErrorBoundary from './compound/ErrorBoundary';
import Error from "./screens/Error";
 import Login from "./screens/login";
import FAQs from "./screens/faq";
import View from "./screens/view";
import Home from "./screens/home";
import Add from "./compound/add";
import Addlist from "./compound/addlist";

function App() {
  return (
    <div className="App">
    
<ErrorBoundary>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Landingpage/>}/> 
          <Route path="/login"  index element={<Login/>} />
          <Route path="/faqs"   element={<FAQs/>} /> 
          <Route path="/home"   element={<Home/>} /> 
          <Route path="/add"   element={<Add/>} /> 
          <Route path="/view"   element={<View/>} /> 
          <Route path="/addlist"   element={<Addlist/>} /> 
          <Route path="*" element={<Error/>} />

          
      </Routes>
      
      </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;
