import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Form, Button } from "react-bootstrap";
import "./style.css";
// import ScrollAnimation from 'react-animate-on-scroll';

function Contact() {
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
                            LET'S TALK
                        </h1><br />
                    </Header>
                </Row>
                <Form>
                    <Form.Group controlId="formFirstName">
                        <Form.Control type="name" placeholder="First Name" />
                    </Form.Group>
                    <Form.Group controlId="formLastName">
                        <Form.Control type="name" placeholder="Last Name" />
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control type="email" placeholder="Enter Email" />
                    </Form.Group>
                    <Form.Group controlId="formMessage">
                        <Form.Control as="textarea" placeholder="Message" rows={5} />
                    </Form.Group>
                    <Button variant="primary" type="submit" class="btn btn-outline-dark btn-lg">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default Contact;