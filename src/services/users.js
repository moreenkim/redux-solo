//import * as userSelectors from '../store/users/reducer';

//import { createStore, applyMiddleware, combineReducers, compose } from 'redux';

// import thunk from 'redux-thunk';
// import * as reducers from '../store/reducers';

//const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//   combineReducers(reducers),
//   composeEnhancer(applyMiddleware(thunk))
// );

class UserService {
  async authenticateUser(payload) {
    const url = `http://localhost:5000/api/v1/auth/login`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(
        `UserService authenticateUser failed, HTTP status ${response.status}`
      );
    }

    const { token } = await response.json();

    if (response.status === 400) {
      throw token.errors;
    }
    return token;
  }

  async userAuthenticated(token) {
    const url = 'http://localhost:5000/api/v1/auth/me';
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(
        `UserService getUserWithToken failed, HTTP status ${response.status}`
      );
    }

    const { data } = await response.json();

    return data;
  }

  async newUserRegister(payload) {
    const url = 'http://localhost:5000/api/v1/auth/register';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(
        `UserService newUserRegister failed, HTTP status ${response.status}`
      );
    }

    const { token } = await response.json();

    if (response.status === 400) {
      throw token.errors;
    }

    return token;
  }
}

export default new UserService();
