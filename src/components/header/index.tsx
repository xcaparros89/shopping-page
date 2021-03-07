import React, { ReactElement, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import "./navbarStyle.css";
import categoriesDB from "../../lib/category";
import { UserContext } from "../../lib/AuthProvider";

export default function Header(): ReactElement {
  useEffect(() => {
    const fetchCategories = async () => {
      const result = await categoriesDB.findAll();
      setCategories(result.body);
    };
    fetchCategories();
  }, []);
  let [categories, setCategories] = useState([{ title: "" }]);
  let [user, setUser] = useContext(UserContext);
  let logout = ():void => {
    setUser({ userInfo: null, isLogged: false, isAdmin: false });
  };
  return (
    <Navbar className="basicColors" expand="lg">
      <Navbar.Brand as={Link} to="/">
        Xavi's garden
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="basicColors" />
      <Navbar.Collapse id="basic-navbar-nav" className="basicColors">
        <Nav className="mr-auto basicColors">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          {user.isLogged ? (
            <Button onClick={logout}>Logout</Button>
          ) : (
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          )}
          <Nav.Link as={Link} to="/search">
            Search
          </Nav.Link>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-custom">Categories</Dropdown.Toggle>
            <Dropdown.Menu id="dropdown-custom">
              <Dropdown.Item
                style={{ color: "rgba(0,0,0,.5)" }}
                href="/search/on-sale"
              >
                On sale
              </Dropdown.Item>
              <Dropdown.Item
                style={{ color: "rgba(0,0,0,.5)" }}
                href="/search/popular"
              >
                Popular
              </Dropdown.Item>
              <Dropdown.Item
                style={{ color: "rgba(0,0,0,.5)" }}
                href="/search/new"
              >
                New
              </Dropdown.Item>
              <Dropdown.Divider />
              {categories.map((category) => (
                <Dropdown.Item
                  style={{ color: "rgba(0,0,0,.5)" }}
                  href={`/search/${category.title}`}
                >
                  {category.title}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Nav.Link as={Link} to="/customer-service">
            Customer service
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
