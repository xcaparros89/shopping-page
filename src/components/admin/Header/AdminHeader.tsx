import React, { ReactElement, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import "./navbarStyle.css";
import { UserContext } from "../../../lib/AuthProvider";

export default function AdminHeader(): ReactElement {
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
          <Nav.Link as={Link} to="/admin/itemsList">
            Items List
          </Nav.Link>
          <Nav.Link as={Link} to="/admin/categoriesList">
            Category List
          </Nav.Link>
          <Nav.Link as={Link} to="#">
            User List
          </Nav.Link>
          {user.isAdmin && 
            <Button onClick={logout}>Logout</Button>
          }
          </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
