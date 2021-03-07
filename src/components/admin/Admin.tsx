import React, { ReactElement } from "react";
import { Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import CategoriesList from "./Categories/CategoriesList";
import CategoryInfo from "./Categories/CategoryInfo";
import ItemsList from "./Items/ItemsList";
import ItemInfo from "./Items/ItemInfo";
import AdminLogin from "./Login/AdminLogin";
import ItemForm from "../forms/ItemForm";
import CategoryForm from "../forms/CategoryForm";
import AdminHeader from "./Header/AdminHeader";
import Footer from "../Footer";

export default function Admin(): ReactElement {
  return (
    <Container fluid="xl">
      <AdminHeader />
      {
        <Switch>
          <Route exact path="/admin/itemsList" component={ItemsList} />
          <Route exact path="/admin/itemsList/:id" component={ItemInfo} />
          <Route exact path="/admin/login" component={AdminLogin} />
          <Route exact path="/admin/createItem" component={ItemForm} />
          <Route exact path="/admin/createCategory" component={CategoryForm} />
          <Route exact path="/admin/categoriesList" component={CategoriesList} />
          <Route exact path="/admin/categoriesList/:id" component={CategoryInfo} />
          <Route exact path="/admin/createItem" component={ItemForm} />
        </Switch>
      }
      <Footer />
    </Container>
  );
}
