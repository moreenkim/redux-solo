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
import { AddReview } from './container/AddReview';
import ReviewView from './container/ReviewView';

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
              <NavLink to="/home" className="nav-link" activeClassName="active">
                Bootcamps
              </NavLink>
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
              {token === null ? (
                <NavLink
                  to="/register"
                  className="nav-link"
                  activeClassName="active"
                >
                  Register
                </NavLink>
              ) : null}
            </NavItem>
          </Nav>
        </Navbar>

        <Switch>
          <Route exact path="/" component={AllBootcamps} />
          <Route exact path="/home" component={AllBootcamps} />
          <Route exact path="/bootcamps/:id" component={BootcampDetail} />
          <Route exact path="/login" component={UserLogin} />
          <Route exact path="/profile" component={ProfileView} />
          <Route exact path="/register" component={UserRegister} />
          <Route exact path="/add-review/:id" component={AddReview} />
          <Route exact path="/read-reviews/:id" component={ReviewView} />
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
