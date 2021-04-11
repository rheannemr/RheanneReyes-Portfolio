import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Project from "../components/Project"
import "./style.css";
// import ScrollAnimation from 'react-animate-on-scroll';

function Projects() {
    return (
        <div>
            <Hero>
                <div class="heroheader">
                    <div class="content">
                        <p>Welcome! My name is</p>
                        <h1>RHEANNE REYES.</h1>
                        <p>I am a Full Stack Web Developer.</p>
                    </div>
                </div>
            </Hero>
            <Navbar />
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Header>
                        <h1 className="aboutheader">
                            PROJECTS
                        </h1>
                    </Header>
                </Row>
            </Container>
            <Project />
        </div>
    )
}

export default Projects;