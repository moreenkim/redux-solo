import React, { Component } from 'react';
import { Formik } from 'formik';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Form, FormGroup, Col, Input, Button } from 'reactstrap';

import * as userSelectors from '../store/users/reducer';

export class ReviewForm extends Component {
  static redirect(link) {
    return <Redirect to={link} />;
  }

  render() {
    const { initialData, token, match } = this.props;
    return (
      <Formik
        initialValues={initialData}
        onSubmit={async (values, { setSubmitting, setStatus }) => {
          const payload = {
            id: match.params.id,
            payload: {
              title: values.title,
              text: values.description,
              rating: values.rating,
            },
            token,
          };
          try {
            const { formActionDispatch } = this.props;
            await formActionDispatch(payload).then(() => {
              setSubmitting(false);
              setStatus('done');
            });
          } catch (error) {
            console.error(error);
          }
        }}
        render={({
          values,
          status,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setStatus,
        }) => (
          <div>
            <p>Write a Review</p>
            <p>You must have attended and graduated this bootcamp to review</p>
            <Form onSubmit={handleSubmit}>
              <FormGroup className="row">
                <Col sm="6">
                  <Input
                    name="title"
                    type="text"
                    bsSize="lg"
                    placeholder="Review title"
                    aria-label="title"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                  />
                </Col>
              </FormGroup>

              <FormGroup className="row">
                <Col md="8">
                  <Input
                    name="description"
                    type="description"
                    bsSize="lg"
                    placeholder="Your review"
                    aria-label="description"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                  />
                </Col>
              </FormGroup>

              <FormGroup className="row">
                <Col md="8">
                  <Input
                    name="rating"
                    type="rating"
                    bsSize="lg"
                    placeholder="Rating"
                    aria-label="rating"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.rating}
                  />
                </Col>
              </FormGroup>

              <FormGroup className="row my-5">
                <Col md={{ size: 5 }}>
                  <Button
                    type="submit"
                    className="btn btn-primary btn-block"
                    aria-label="Submit Review"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Authenticating...' : 'Submit Review'}
                  </Button>
                </Col>
              </FormGroup>
            </Form>
            {status === 'done' && <Redirect to="/" />}
          </div>
        )}
      />
    );
  }
}

function mapStateToProps(state, props) {
  return {
    token: userSelectors.getUserToken(state),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return bindActionCreators({ formActionDispatch: ownProps.action }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ReviewForm));
