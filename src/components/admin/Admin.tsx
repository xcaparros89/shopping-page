import { ReactElement } from "react";
import { Switch, Route } from "react-router-dom";
import CategoriesList from "./CategoriesList";
import CategoryInfo from "./CategoryInfo";
import ItemsList from "./ItemsList";
import ItemInfo from "./ItemInfo";
import AdminLogin from "./Login";
import CreateCategory from "./CreateCategory";
import createItem from "./CreateItem";
import AdminHeader from "./Header/AdminHeader";
import Footer from "../customer/Footer";

export default function Admin(): ReactElement {
  return (
    <>
      <AdminHeader />
      {
        <Switch>
          <Route exact path="/admin/" component={AdminLogin} />
          <Route exact path="/admin/login" component={AdminLogin} />
          <Route exact path="/admin/itemsList" component={ItemsList} />
          <Route exact path="/admin/itemsList/:id" component={ItemInfo} />
          <Route exact path="/admin/createItem" component={createItem} />
          <Route exact path="/admin/categoriesList" component={CategoriesList} />
          <Route exact path="/admin/categoriesList/:id" component={CategoryInfo} />
          <Route exact path="/admin/createCategory" component={CreateCategory} />
        </Switch>
      }
      <Footer />
      </>
  );
}
