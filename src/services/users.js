//import * as actionTypes from '../store/users/actionTypes';

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

  // async getUserWithToken(url = 'http://localhost:5000/api/v1/auth/me') {
  //   const response = await fetch(url, {
  //     method: 'GET',
  //     headers: {
  //       Authorization: `Token ${actionTypes}`,
  //     },
  //   });

  //   if (!response.ok) {
  //     throw new Error(
  //       `UserService getUserWithToken failed, HTTP status ${response.status}`
  //     );
  //   }

  // }
}

export default new UserService();
