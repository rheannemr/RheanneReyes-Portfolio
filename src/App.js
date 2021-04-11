import React from "react";
import { HashRouter, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <HashRouter basename='/'>
      <div>
        <Wrapper>
          <Route exact path="/" component={AboutMe} />
          <Route exact path="/aboutme" component={AboutMe} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={Projects} />
        </Wrapper>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
