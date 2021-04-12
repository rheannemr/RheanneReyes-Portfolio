import React from "react";
import { Card } from "react-bootstrap";
import "./style.css"

function Project(props) {
    return (
        <Card border="dark" style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title className="text-center">{props.children}</Card.Title>
                <div class="photo">
                    <Card.Img src={props.image}></Card.Img>
                    <div class="overlay">
                        <div class="text">
                            <Card.Link href={props.href} class="app-link" target='_blank'>Github Repository</Card.Link><br />
                            <Card.Link href={props.link} class="app-link" target='_blank'>Deployed App</Card.Link>
                        </div>
                    </div>
                </div>
                <br />
                <Card.Text class="card-p">
                    {props.text}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Project;