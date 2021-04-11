import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Navbar from "../components/Navbar"
import "./style.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <div>
      <Hero>
        <div class="overlay">
          <div class="content">
            <p>Welcome! My name is</p>
            <h1>RHEANNE REYES.</h1>
            <p>I am a Full Stack Web Developer.</p>
            <Link to="/footer">
            <button type="button" class="btn btn-outline-dark btn-lg">Let's Get Started</button>
            </Link>
          </div>
        </div>
      </Hero>
      <Navbar />
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <ScrollAnimation animateIn="ease-in-out">
              <h1 className="aboutheader">ABOUT</h1>
            </ScrollAnimation>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p className="about-p"><br />
              I'm Rheanne Reyes. 22 years old and based in Eugene, OR. I am student enrolled in University of Oregon's
              full stack web development coding bootcamp.
              Through the bootcamp, I've developed skills in numerous languages such as HTML, CSS, JavaScript,
              jQuery, Node, mySQL, Sequelize, Handlebars, MongoDB, and React. Since adding these languages to my tool box,
              I've learned that I have a passion for creating clean, simple, aesthetically pleasing, and user-friendly applications.

              Thanks for being here! Shoot me a message and let's collab!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutMe;