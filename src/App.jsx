import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contactus from "./components/Contactus/Contactus";

function App() {
  return (
    <>
      <div className="app">
        <header>
          <Navbar />
          <Landing />
        </header>
        <main>
          <Services />
          <Projects />
          <About />
          <Contactus />
        </main>
      </div>
    </>
  );
}

export default App;
