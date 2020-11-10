import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './App.css';

import BootcampDetail from './container/BootcampDetail';

function App() {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">BootCamps</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/bootcamps">BootcampDetail</NavLink>
          </NavItem>
        </Nav>
      </Navbar>

      <Switch>
        <Route exact path="/bootcamps" component={BootcampDetail} />
      </Switch>
    </div>
  );
}

export default App;
