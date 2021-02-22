import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login/index";
import Home from "./components/Home/index";
import Something from "./components/Something";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from 'react-bootstrap/Container';

function App() {
  let categories=['fruits'];
  return (
    <Container fluid="xl">
    <Header categories={categories}/>
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
