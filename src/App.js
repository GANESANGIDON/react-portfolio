import { React, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import {
  NavBar,
  Home,
  Studies,
  Skills,
  Projects,
  Certificates,
  Contact,
  ProjectsCarousel,
  Footer
} from "./components";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studies" element={<Studies />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projectscarousel" element={<ProjectsCarousel />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
