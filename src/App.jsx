import Navbar from "./components/NAVBAR/Navbar";
import Intro from "./components/INTRO/Intro";
import Skills from "./components/SKILLS/Skills";
import Projects from "./components/PROJECTS/Projects";
import Education from "./components/EDUCATION/Education";
import Contact from "./components/CONTACT/Contact";
import Footer from "./components/FOOTER/Footer";
const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Projects/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;
