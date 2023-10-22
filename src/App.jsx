import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";

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
        </main>
      </div>
    </>
  );
}

export default App;
