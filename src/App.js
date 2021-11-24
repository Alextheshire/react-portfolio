import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarC from './components/NavbarC';
import About from './components/About';
import ProjectCard from './components/ProjectCard';
import Projects from './components/Projects';
import Contact from './components/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer'




function App() {
const [page,setPage] = useState('about')
  return (
    <>
    <NavbarC page={page} setPage={setPage}/>
    {page==='about' && <About />}
    {page==='projects' && <Projects />}
    {page==='contact' && <Contact />}
    <Footer />
    </>
  );
}

export default App;
