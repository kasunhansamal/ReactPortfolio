import React, { useEffect } from "react";

import NavBar from "./common/NavBar";
import AboutMe from "./screens/AboutMe";
import Skills from "./screens/Skills";
import Portfolio from "./screens/Portfolio";
import Experience from "./screens/Experience";
import MyFooter from "./common/Footer";

import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <NavBar />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Experience />
      <MyFooter />
    </>
  );
}

export default App;
