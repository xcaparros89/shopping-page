import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Something from "./components/Something";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search/Search";
import Info from "./components/Info";
import Container from 'react-bootstrap/Container';
import ItemForm from './components/forms/ItemForm'
import CategoryForm from './components/forms/CategoryForm'
import CategoriesList from './components/admin/Categories/CategoriesList'
import CategoryInfo from './components/admin/Categories/CategoryInfo'

function App() {
  return (
    <Container fluid="xl">
    <Header/>
    { <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/search' component={Search} />
      <Route exact path='/info/:id' component={Info} />
      <Route exact path='/createItem' component={ItemForm} />
      <Route exact path='/createCategory' component={CategoryForm} />
      <Route exact path='/categoriesList' component={CategoriesList} />
      <Route exact path='/categoriesList/:id' component={CategoryInfo} />
    </Switch> }
    <Footer />
    </Container>
  );
}

export default App;
