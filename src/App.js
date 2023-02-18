// import { motion } from "framer-motion";
import { useState } from "react";
import "./App.css";
import About from "./components/About/About";
import { BackToButton } from "./components/BackToButton";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { Navbar } from "./components/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");

  return (
    <div className="App relative">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Home setSelectedPage={setSelectedPage} />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <BackToButton />
    </div>
  );
}

export default App;
