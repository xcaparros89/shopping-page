import React, { useEffect, useState, ReactElement } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './LoginStyle.css'
import auth from '../../lib/auth'
interface Props {}

export default function Login({}: Props): ReactElement {
  let [login, setLogin] = useState({email:'', password:''});
  let [register, setRegister] = useState({email:'', password:'', repeatPassword:'', validated:false});

  let handleLoginSubmit = (event:any) => {
    event.preventDefault();
    console.log(login);
  };
  let handleRegisterSubmit = (event:any) => {
    event.preventDefault();
    console.log(register);
    auth.signup({username:'hola', email:register.email, password:register.password, adress:'sdfs'})
  };

  let handleLoginChange = (event:any) => {
    const { name, value } = event.target;
    console.log(name)
    setLogin(login=>({...login, [name]:value}))
  };
  let handleRegisterChange = (event:any) => {
    const { name, value } = event.target;
    console.log(name)
    setRegister(register=>({...register, [name]:value}))
  };

  return (
    <div>
      <h1>Login or Create an Account</h1>
      <h3>Feel free to create an account or simply buy as guest</h3>
      <div className="forms-container">
        <div className="form">
          <h2>Login</h2>
          <Form onSubmit={handleLoginSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleLoginChange}/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Password" onChange={handleLoginChange}/>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <div className="form">
          <h2>Register</h2>
          <Form onSubmit={handleRegisterSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleRegisterChange}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Password" onChange={handleRegisterChange} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Repeat password</Form.Label>
              <Form.Control type="password" name="repeatPassword" placeholder="Password" onChange={handleRegisterChange}/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
