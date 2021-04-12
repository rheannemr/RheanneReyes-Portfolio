import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import { CardColumns } from "react-bootstrap";
import "./style.css";
import Horiseon from "../assets/images/horiseon copy.png";
import DailyPlanner from "../assets/images/dailyplanner copy.png";
import GroceryList from "../assets/images/grocerylist copy.png";
import PasswordGenerator from "../assets/images/passwordgenerator copy.png";
import VirtualBar from "../assets/images/virtualbar copy.png";
import NoteTaker from "../assets/images/notesposted copy.png";

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
                        image={VirtualBar} src={props.VirtualBar} alt="Virtual Bar"
                        href={"https://github.com/joshrehanek/bar-trivia-simulator"}
                        link={"https://joshrehanek.github.io/bar-trivia-simulator/"}
                        text="This is a virtual bar simulator that displays a Drink of the Moment card along with 5 classic recommended drinks from the developers. With a multiple choice trivia game where the user is asked 10 questions on numerous subjects.
                        The user is told if they answered correctly/incorrectly then records and stores their score in local storage."
                    >
                        Getcha Fix Virtual Bar
                </Project>
                    <Project
                        image={GroceryList} src={props.GroceryList} alt="Grocery Helper"
                        href={"https://github.com/rheannemr/Grocery-list"}
                        link={"https://the-grocery-list.herokuapp.com/"}
                        text="The Grocery list application will help any user upon all their grocery excursions. The user can simply log what they need to buy onto their list and once it's purchased, they will be able to move it to their fridge list. The user has the ability to move it back and forth for future grocery trips, and may also delete the item if it's no longer needed. On top of the grocery list, the user will be able to search up recipe ideas based on the ingredients they have/need."
                    >
                        Grocery List - Your Everyday Helper
                </Project>
                    <Project
                        image={Horiseon} src={props.Horiseon} alt="Horiseon"
                        href={"https://github.com/rheannemr/Horiseon-Website"}
                        link={"https://rheannemr.github.io/Horiseon-Website/"}
                        text="Horiseon is a social solution service that advances business traffic through the internet. Horiseon uses search engine optimization (SEO) to improve the quantity and quality of website traffic from search engines. Additionally, Horiseon manages the business's online reputation and analytics for the consumers. With Horiseon, businesses can increase their search ranking and website traffic, with a decrease in advertising costs and work on the business's end."
                    >
                        Horiseon
                </Project>
                </CardColumns>
                <CardColumns>
                    <Project
                        image={DailyPlanner} src={props.DailyPlanner} alt="Daily Planner"
                        href={"https://github.com/rheannemr/Daily-Schedule-Planner"}
                        link={"https://rheannemr.github.io/Daily-Schedule-Planner/"}
                        text="This is a simple daily planner application that displays the hours of a single work day (9AM - 5PM) with the user's current time (using moment.js library). The user is able to enter notes into the textarea field and when hitting the 'Save' button, their notes are then saved to local storage by the hour. The past hours turn gray, the present/current hour will appear red, and all future hours of the day will appear green."
                    >
                        Daily Planner
                </Project>
                    <Project
                        image={PasswordGenerator} src={props.PasswordGenerator} alt="Password Generator"
                        href={"https://github.com/rheannemr/Password-Generator"}
                        link={"https://rheannemr.github.io/Password-Generator/"}
                        text="This is an interactive application made with JavaScript. The user is able to generate a password between
                        8 and 128 characters, with or without lowercase letters, uppercase letters, numbers, and special characters. After choosing 
                        the password parameters, the application displays the password in the text box."
                    >
                        Password Generator
                </Project>
                    <Project
                        image={NoteTaker} src={props.NoteTaker} alt="Note Taker"
                        href={"https://github.com/rheannemr/Note-Taker"}
                        link={"https://work-notes-app.herokuapp.com/"}
                        text="The note taker application allows the user to organize their thoughts and keep track of their daily tasks with notes. The user creates a Note Title and adds the note information (see photos below for example) and is able to save it. When they either complete their task or the note is no longer needed, they are able to click the trash icon and it will be deleted."
                    >
                        Note Taker
                </Project>
                </CardColumns>
            </Container>
        </div>
    )
}

export default Projects;