import './App.css';

import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Landingpage from "./screens/landingpage";
import ErrorBoundary from './compound/ErrorBoundary';
import Error from "./screens/Error";
 import Login from "./screens/login";
import FAQs from "./screens/faq";
import View from "./screens/view";
import Home from "./screens/home";
import Add from "./compound/note";
import Addlist from "./compound/notelist";
import Test from "./compound/ex1";

function App() {
  return (
    <div className="App">
    
<ErrorBoundary>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Landingpage/>} exact/> 
          <Route path="/login"  index element={<Login/>} />
          <Route path="/faqs"   element={<FAQs/>} /> 
          <Route path="/home"   element={<Home/>} /> 
          <Route path="/note"   element={<Add/>} /> 
          <Route path="/view"   element={<View/>} /> 
          <Route path="/notelist"   element={<Addlist/>} /> 
          <Route path="/test"   element={<Test/>} /> 
          <Route path="*" element={<Error/>} />

          
      </Routes>
      
      </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;
