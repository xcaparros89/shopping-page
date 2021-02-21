import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Something from "./components/Something";
import Header from "./components/Header";
import Footer from "./components/footer";
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container fluid="xl">
    <Header />
    { <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/something' component={Something} />
    </Switch> }
    <Footer />
    </Container>
  );
}

export default App;
