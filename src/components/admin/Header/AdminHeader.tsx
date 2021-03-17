import { ReactElement, useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./navbarStyle.css";
import { UserContext } from "../../../lib/AuthProvider";
import {UserAuth} from '../../../interfaces'

export default function AdminHeader(): ReactElement {
  let [user, setUser]:[user:UserAuth, setUser:React.Dispatch<React.SetStateAction<UserAuth | undefined>> ]= useContext(UserContext);
  let logout = ():void => {
    setUser({ userInfo: null, isCustomer: false, isAdmin: false });
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
          {/* <Nav.Link as={Link} to="#">
            User List
          </Nav.Link> */}
          {user.isAdmin && 
            <Nav.Link as={Link} onClick={logout} to="/admin/login">
            Logout
          </Nav.Link>
          }
          </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
