import { Switch, Route } from "react-router-dom";
import Login from "./Login/Login";
import Home from "./Home/Home";
import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search/Search";
import Info from "./Info";
import Admin from "./admin/Admin";
import Customer from "./Customer";

function App() {
  let x = true;
  return (
    <>
      <Header />
      {
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/info/:id" component={Info} />
          <Route path="/admin" component={Admin} />
          <Route path="/" component={Customer} />
        </Switch>
      }
      <Footer />
    </>
  );
}

export default App;
