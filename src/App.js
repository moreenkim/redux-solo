import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import './App.css';

import { connect } from 'react-redux';
import * as userSelectors from './store/users/reducer';

import BootcampDetail from './container/BootcampDetail';
import AllBootcamps from './container/AllBootcamps';
import { UserLogin } from './container/UserLogin';
import { UserRegister } from './container/UserRegister';
import ProfileView from './container/ProfileView';

class App extends Component {
  render() {
    const { token } = this.props;
    console.log('token value:', token);
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand to="/">DevCamper</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/">Bootcamps</NavLink>
            </NavItem>
            <NavItem>
              {token !== null ? (
                <NavLink
                  to="/profile"
                  className="nav-link"
                  activeClassName="active"
                >
                  View Profile
                </NavLink>
              ) : (
                <NavLink
                  to="/login"
                  className="nav-link"
                  activeClassName="active"
                >
                  Login
                </NavLink>
              )}
            </NavItem>
            <NavItem>
              {token !== null ? (
                <NavLink
                  to="/login"
                  className="nav-link"
                  activeClassName="active"
                >
                  Login
                </NavLink>
              ) : (
                <NavLink
                  to="/register"
                  className="nav-link"
                  activeClassName="active"
                >
                  Register
                </NavLink>
              )}
            </NavItem>
          </Nav>
        </Navbar>

        <Switch>
          <Route exact path="/" component={AllBootcamps} />
          <Route exact path="/bootcamps/:id" component={BootcampDetail} />
          <Route exact path="/login" component={UserLogin} />
          <Route exact path="/profile" component={ProfileView} />
          <Route exact path="/register" component={UserRegister} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    token: userSelectors.getUserToken(state),
  };
}

export default connect(mapStateToProps)(App);
