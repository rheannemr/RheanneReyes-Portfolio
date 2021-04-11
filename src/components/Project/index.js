import React from "react";
import { Card } from "react-bootstrap";

function Project(props) {
    return (
        <Card style={{ width: "20rem" }}>
            <Card.Body>
                <Card.Title>{props.children}</Card.Title>
                <div class="overlay">
                    <div class="text">
                        <Card.Link href={props.href} target='_blank'>Github</Card.Link>
                        <Card.Link href={props.link} target='_blank'>Deployed Application</Card.Link>
                    </div>
                </div>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Project;