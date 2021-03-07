import React, { ReactElement, useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import { Formik } from "formik";
import auth from "../../lib/auth";
import { LoginValues } from "../../interfaces";
import { loginSchema } from "./validationForms";
import { Redirect } from 'react-router-dom';
import {UserContext} from '../../lib/AuthProvider' 


export default function LoginForm({}: any): ReactElement {
  let [error, setError] = useState({ success: true, body: "" });
  let [user, setUser] = useContext(UserContext);

  const initialValues: LoginValues = {
    username: "",
    password: "",
  };
  let handleRegisterSubmit = async (values: LoginValues) => {
    console.log(values);
    let login = await auth.login({
      username: values.username,
      password: values.password,
    });
    if(login.success){
      setUser({userInfo:login.body, isLogged:true, isAdmin:false})
    } else{
      setError(login);
    }
    
  };
  return (
    <Formik
      validationSchema={loginSchema}
      onSubmit={(values: LoginValues) => {
        handleRegisterSubmit(values);
      }}
      initialValues={initialValues}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <>
          <h2>Login</h2>
          {user.isLogged && <Redirect to='/'></Redirect>}
          {!error.success && <p>{error.body}</p>}
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationFormikUsername">
                <Form.Label>Username</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    isValid={touched.username && !errors.username}
                    isInvalid={!!errors.username}
                  />
                  <Form.Control.Feedback></Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.username}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  isValid={touched.password && !errors.password}
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="valid"></Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Button type="submit">Submit form</Button>
          </Form>
        </>
      )}
    </Formik>
  );
}
