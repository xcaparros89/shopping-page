import React, { ReactElement } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import "./navbarStyle.css";

interface Props {
  categories: string[];
}

export default function Header({ categories }: Props): ReactElement {
  return (
    <Navbar className="basicColors" expand="lg">
      <Navbar.Brand href="/">Xavi's garden</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="basicColors" />
      <Navbar.Collapse id="basic-navbar-nav" className="basicColors">
        <Nav className="mr-auto basicColors">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-custom">Categories</Dropdown.Toggle>
            <Dropdown.Menu id="dropdown-custom">
              <Dropdown.Item style={{color: 'rgba(0,0,0,.5)'}} href="/search/on-sale">On sale</Dropdown.Item>
              <Dropdown.Item style={{color: 'rgba(0,0,0,.5)'}} href="/search/popular">Popular</Dropdown.Item>
              <Dropdown.Item style={{color: 'rgba(0,0,0,.5)'}} href="/search/new">New</Dropdown.Item>
              <Dropdown.Divider />
              {categories.map((category) => (
                <Dropdown.Item style={{color: 'rgba(0,0,0,.5)'}} href={`/search/${category}`}>
                  {category}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Nav.Link href="/customer-service">Customer service</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
