import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Form, Button } from "react-bootstrap";
import "./style.css";

function Contact() {
    return (
        <div>
            <Hero>
                <div class="heroheader">
                    <div class="content">
                        <p class="header-p">Welcome! My name is</p>
                        <h1>RHEANNE REYES.</h1>
                        <p class="header-p">I am a Full Stack Web Developer.</p>
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
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                            <Form.Check inline label="she/her" type={type} id={`inline-${type}-1`} />
                            <Form.Check inline label="he/him" type={type} id={`inline-${type}-2`} />
                            <Form.Check inline label="they/them" type={type} id={`inline-${type}-3`} />
                            <Form.Check inline label="she/they" type={type} id={`inline-${type}-4`} />
                            <Form.Check inline label="he/they" type={type} id={`inline-${type}-5`} />
                        </div>
                    ))}
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control type="email" placeholder="Email Address" />
                    </Form.Group>
                    <Form.Group controlId="formMessage">
                        <Form.Control as="textarea" placeholder="Message" rows={5} />
                    </Form.Group>
                    <Button variant="dark" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default Contact;