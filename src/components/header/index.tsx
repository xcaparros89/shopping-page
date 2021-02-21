import React, { ReactElement } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import "./navbarStyle.css";

interface Props {}

export default function Header({}: Props): ReactElement {
  return (
    <Navbar className="basicColors" expand="lg">
      <Navbar.Brand href="/">Xavi's garden</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="basicColors" />
      <Navbar.Collapse id="basic-navbar-nav" className="basicColors">
        <Nav className="mr-auto basicColors">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <NavDropdown
            title="Categories"
            id="dropdown-custom-1"
            className="basicColors"
          >
            <NavDropdown.Item href="#action/on-sale" className="basicColors">
              On sale
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/popular">Popular</NavDropdown.Item>
            <NavDropdown.Item href="#action/new">New</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/outdoor">Outdoor</NavDropdown.Item>
            <NavDropdown.Item href="#action/indoor">Indoor</NavDropdown.Item>
            <NavDropdown.Item href="#action/fruits">Fruits</NavDropdown.Item>
            <NavDropdown.Item href="#action/bonsais">Bonsais</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/customer-service">Customer service</Nav.Link>
        </Nav>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-custom">Pow! Zoom!</Dropdown.Toggle>
          <Dropdown.Menu  id="dropdown-custom">
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3" active>
              Active Item
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>{" "}
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
