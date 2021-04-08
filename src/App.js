import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={AboutMe} />
          <Route exact path="/aboutme" component={AboutMe} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={Projects} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
