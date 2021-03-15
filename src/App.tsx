import styles from "./App.module.css";
import { Switch, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import {UserProvider} from './lib/AuthProvider'
import Admin from './components/admin/Admin'
import Customer from './components/customer/Customer'

function App() {
  return (
    <UserProvider>
    <Container fluid="xl" className={styles.ContainerAll}>
    { <Switch>
      <Route path='/admin' component={Admin} />
      <Route path='/' component={Customer} />
    </Switch> }
    </Container>
    </UserProvider>
  );
}

export default App;
