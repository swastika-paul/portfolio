import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import Dashboard from "./components/Dashboard";
import Experience from "./components/Experience";


function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact/>
 
      

    </div>
  );
}
function App() {
  return (
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Dashboard" element={<Dashboard />} />
   </Routes>
  );
} 

export default App;
