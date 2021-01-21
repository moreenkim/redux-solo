import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegisterForm from './RegisterForm';
import FormView from '../component/FormView';

import * as userActions from '../store/users/actions';

export class UserRegister extends Component {
  render() {
    const action = userActions.registerUser;
    const initialData = {
      name: '',
      email: '',
      password: '',
      role: '',
    };

    return (
      <FormView
        form={<RegisterForm initialData={initialData} action={action} />}
      />
    );
  }
}

export default connect(UserRegister);
