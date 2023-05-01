import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";
import { useMediaPredicate } from "react-media-hook";

function App() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const greaterthan535 = useMediaPredicate("(min-width: 535px)");

  useEffect(() => {
    if(greaterthan535) {
      setSideBarOpen(false);
    }
  }, [greaterthan535])

  function clickHandler() {
    setSideBarOpen(false);
  }

  return (
    <div className="App">
      <Navbar sideBarOpen = {sideBarOpen} setSideBarOpen = {setSideBarOpen}/>
      {
        sideBarOpen ?
        <div>
          <div className="background" onClick={clickHandler}></div>
          <div className="sidebar sidebar-open">
            <div><a href="#projects" className="sidebar-projects" onClick={clickHandler}>Projects</a></div>
            <div><a href="#skills" className="sidebar-skills" onClick={clickHandler}>Skills</a></div>
            <div><a href="#contactme" className="sidebar-contactme" onClick={clickHandler}>Contact Me</a></div>
          </div> 
        </div>
        
        : <div className="sidebar sidebar-close"></div>
      }
      <HeroSection/>
      <Projects/>
      <Skills/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;
