import { Switch, Route } from "react-router-dom";
import Login from "./Login/";
import Home from "./Home/";
import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";
import Info from "./Info";

function App() {
  return (
    <>
      <Header />
      {
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/info/:id" component={Info} />
        </Switch>
      }
      <Footer />
    </>
  );
}

export default App;
