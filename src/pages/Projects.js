import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Navbar from "../components/Navbar"
import Project from "../components/Project"
import "./style.css";
import ScrollAnimation from 'react-animate-on-scroll';

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
                    <Col size="md-12">
                        <ScrollAnimation animateIn="ease-in-out">
                            <h1 className="aboutheader">PROJECTS</h1>
                        </ScrollAnimation>
                    </Col>
                </Row>
            </Container>
            <Project />
        </div>
    )
}

export default Projects;