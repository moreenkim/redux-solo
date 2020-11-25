import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserForm from './UserForm';
import FormView from '../component/FormView';

import * as userActions from '../store/users/actions';

export class UserLogin extends Component {
  render() {
    const action = userActions.authenticateUserAction;
    const initialData = {
      email: '',
      password: '',
    };

    return (
      <FormView form={<UserForm initialData={initialData} action={action} />} />
    );
  }
}

export default connect(UserLogin);
