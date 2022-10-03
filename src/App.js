import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landingpage from "./pages/LandingPage";
import ErrorBoundary from './components/ErrorBoundary';
import Error from "./pages/Error";
import Login from "./pages/Login";
import FAQs from "./pages/Faqs";
import Home from "./pages/Home";
import Note from "./pages/Note";
import NoteList from "./pages/NoteList";
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function BasicLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}
function LoginLayout() {
  return <Outlet />
}
function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BasicLayout />}>
              <Route index element={<Landingpage />} />
              <Route path="faqs" element={<FAQs />} />
              <Route path="home" element={<Home />} />
              <Route path="note/:mode" element={<Note />} />
              <Route path="notelist" element={<NoteList />} />
              <Route path="*" element={<Error />} />
            </Route> 
            <Route path="/login" element={<LoginLayout />}>
          <Route index element={<Login/>}/>
        </Route>
            </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;
