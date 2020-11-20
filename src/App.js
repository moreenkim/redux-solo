import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './App.css';

import BootcampDetail from './container/BootcampDetail';
import AllBootcamps from './container/AllBootcamps';

function App() {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">DevCamper</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/">Bootcamps</NavLink>
          </NavItem>
        </Nav>
      </Navbar>

      <Switch>
        <Route exact path="/" component={AllBootcamps} />
        <Route exact path="/bootcamps/:id" component={BootcampDetail} />
      </Switch>
    </div>
  );
}

export default App;
