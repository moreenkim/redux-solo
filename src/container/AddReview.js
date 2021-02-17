import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewForm from './ReviewForm';
import FormView from '../component/FormView';

import * as bootcampActions from '../store/bootcamps/actions';

export class AddReview extends Component {
  render() {
    const action = bootcampActions.writeReview;
    const initialData = {
      title: '',
      description: '',
      rating: '',
    };

    return (
      <FormView
        form={<ReviewForm initialData={initialData} action={action} />}
      />
    );
  }
}

export default connect(AddReview);
