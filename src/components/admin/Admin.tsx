import { ReactElement } from "react";
import { Switch, Route } from "react-router-dom";
import CategoriesList from "./Categories/List";
import CategoryInfo from "./Categories/Info";
import CategoryUpdate from "./Categories/Update";
import CreateCategory from "./Categories/Create";
import ItemsList from "./Items/List";
import ItemUpdate from "./Items/Update";
import ItemInfo from "./Items/Info";
import createItem from "./Items/Create";
import AdminLogin from "./Login";
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
          <Route exact path="/admin/items/" component={ItemsList} />
          <Route exact path="/admin/items/list" component={ItemsList} />
          <Route exact path="/admin/items/update/:id" component={ItemUpdate} />
          <Route exact path="/admin/items/info/:id" component={ItemInfo} />
          <Route exact path="/admin/items/create" component={createItem} />
          <Route exact path="/admin/categories/" component={CategoriesList} />
          <Route exact path="/admin/categories/list" component={CategoriesList} />
          <Route exact path="/admin/categories/update/:id" component={CategoryUpdate} />
          <Route exact path="/admin/categories/info/:id" component={CategoryInfo} />
          <Route exact path="/admin/categories/create" component={CreateCategory} />
        </Switch>
      }
      <Footer />
      </>
  );
}
