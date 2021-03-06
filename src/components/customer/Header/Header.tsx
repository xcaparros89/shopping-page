import { ReactElement, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "./header.module.css";
import categoriesDB from "../../../lib/category";
import { UserContext } from "../../../lib/AuthProvider";
import {UserAuth} from '../../../interfaces'

export default function Header(): ReactElement {
  useEffect(() => {
    const fetchCategories = async () => {
      const result = await categoriesDB.findAll();
      if (result.success) {
        setCategories(result.body);
      }
    };
    fetchCategories();
  }, []);
  let [categories, setCategories] = useState<[{title:string}]>([{ title: "" }]);
  console.log(useContext(UserContext), 'usecontext')
  let [user, setUser]:[user:UserAuth, setUser:React.Dispatch<React.SetStateAction<UserAuth | undefined>> ]= useContext(UserContext);
  let logout = (): void => {
    setUser({ userInfo: null, isCustomer: false, isAdmin: false });
  };
  return (
    <Navbar className={styles.basicColors} expand="lg">
      <Navbar.Brand as={Link} to="/">
        Xavi's garden
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.basicColors} />
      <Navbar.Collapse id="basic-navbar-nav" className={styles.basicColors}>
        <Nav className={`mr-auto ${styles.basicColors}`}>
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          {user.isCustomer || user.isAdmin ? (
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
            <Dropdown.Toggle id={styles.dropdownCustom}>Categories</Dropdown.Toggle>
            <Dropdown.Menu id={styles.dropdownCustom}>
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
              {categories.map((category, index) => (
                <Dropdown.Item
                  style={{ color: "rgba(0,0,0,.5)" }}
                  href={`/search/${category.title}`}
                  key={index}
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
