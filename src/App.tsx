import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search/Search";
import Info from "./components/Info";
import Container from 'react-bootstrap/Container';
import ItemForm from './components/forms/ItemForm'
import CategoryForm from './components/forms/CategoryForm'
import CategoriesList from './components/admin/Categories/CategoriesList'
import CategoryInfo from './components/admin/Categories/CategoryInfo'
import ItemsList from './components/admin/Items/ItemsList'
import ItemInfo from './components/admin/Items/ItemInfo'
import {UserProvider} from './lib/AuthProvider'
import AdminLogin from './components/admin/Login/AdminLogin'

function App() {
  let x = true;
  return (
    <UserProvider>
    <Container fluid="xl">
    <Header/>
    { <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/search' component={Search} />
      <Route exact path='/info/:id' component={Info} />

      <Route exact path='/admin/login' component={AdminLogin} />
      <Route exact path='/admin/createItem' component={ItemForm} />
      <Route exact path='/admin/createCategory' component={CategoryForm} />
      <Route exact path='/admin/categoriesList' component={CategoriesList} />
      <Route exact path='/admin/categoriesList/:id' component={CategoryInfo} />
      <Route exact path='/admin/createItem' component={ItemForm} />
      <Route exact path='/admin/itemsList' component={ItemsList} />
      <Route exact path='/admin/itemsList/:id' component={ItemInfo} />
      
    </Switch> }
    <Footer />
    </Container>
    </UserProvider>
  );
}

export default App;
