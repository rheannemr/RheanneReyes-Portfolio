import React from "react";
import { Nav } from "react-bootstrap";

function Navbar() {
  return (
    <Nav className="justify-content-end" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="#/aboutme">About</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="#/projects">Projects</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="#/contact">Contact</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
        Rheanne Reyes
      </Nav.Link>
    </Nav.Item>
  </Nav>
  );
}

export default Navbar;