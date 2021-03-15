import React from 'react';
import Headers from './Components/Headers/Headers';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Create from './Components/Create/Create';
import Home from './Components/Home/Home';
import View from './Components/View/View';
import Clients from './Components/Clients/Clients';
import checkValidate from './Components/checkValidate/Validate';
import Login from './Components/Login/Login';
import ClientsView from './Components/ClientsView/ClientsView';




function App() {

  const token = localStorage.getItem('user');

  const auth = token === null ? false : true;

  return (
    <Router>
       <Container>
          <Headers auth={auth} />
          <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Clients" component={Clients} />
          <Route exact path="/ClientsView" component={ClientsView} />
          <Route exact path="/Create" component={Create} />
          <Route exact path="/View" component={View} />
          <Route exact path="/checkValidate" component={checkValidate} />
          <Route component={Home} />

          </Switch>
        </Container>
    </Router>
  );
}

export default App;
