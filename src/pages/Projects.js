import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import { CardColumns } from "react-bootstrap";
import "./style.css";
import Horiseon from "../assets/images/horiseon copy.png"
// import ScrollAnimation from 'react-animate-on-scroll';

function Projects(props) {
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
                        </h1><br />
                    </Header>
                </Row>
                <CardColumns>
                <Project
                    image = {Horiseon} src = {props.Horiseon}
                    href={"https://github.com/rheannemr/Horiseon-Website"}
                    link={"https://rheannemr.github.io/Horiseon-Website/"}
                    >
                    Horiseon
                </Project>
                <Project
                    image = {Horiseon} src = {props.Horiseon}
                    href={"https://github.com/rheannemr/Horiseon-Website"}
                    link={"https://rheannemr.github.io/Horiseon-Website/"}
                    >
                    Horiseon
                </Project>
                <Project
                    image = {Horiseon} src = {props.Horiseon}
                    href={"https://github.com/rheannemr/Horiseon-Website"}
                    link={"https://rheannemr.github.io/Horiseon-Website/"}
                    text=""
                    >
                    Horiseon
                </Project>
                </CardColumns>
                <CardColumns>
                <Project
                    image = {Horiseon} src = {props.Horiseon}
                    href={"https://github.com/rheannemr/Horiseon-Website"}
                    link={"https://rheannemr.github.io/Horiseon-Website/"}
                    >
                    Horiseon
                </Project>
                <Project
                    image = {Horiseon} src = {props.Horiseon}
                    href={"https://github.com/rheannemr/Horiseon-Website"}
                    link={"https://rheannemr.github.io/Horiseon-Website/"}
                    >
                    Horiseon
                </Project>
                <Project
                    image = {Horiseon} src = {props.Horiseon}
                    href={"https://github.com/rheannemr/Horiseon-Website"}
                    link={"https://rheannemr.github.io/Horiseon-Website/"}
                    text=""
                    >
                    Horiseon
                </Project>
                </CardColumns>
            </Container>
        </div>
    )
}

export default Projects;