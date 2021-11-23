import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import ProjectCard from './components/ProjectCard';
import Projects from './components/Projects';



const projectProps = {
  passgen:{
    url: "https://alextheshire.github.io/password-generator/",
    link: "./assets/passgen.png",
    about: "This is a simple random password generator built using prompts for specifications."
  }
}
function App() {
  return (
    <>
    <Navbar />
    {/* <About /> */}
    <Projects />
    {/* <ProjectCard projectUrl={projectProps.passgen.url} link={projectProps.passgen.link} about={projectProps.passgen.about}/> */}
    </>
  );
}

export default App;
