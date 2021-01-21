import React, { Component } from 'react';
import { Formik } from 'formik';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Form, FormGroup, Col, Input, Button } from 'reactstrap';
//import PropTypes from 'prop-types';

export class RegisterForm extends Component {
  static redirect(link) {
    return <Redirect to={link} />;
  }

  render() {
    const { initialData } = this.props;
    return (
      <Formik
        initialValues={initialData}
        onSubmit={async (values, { setSubmitting, setStatus }) => {
          const payload = {
            name: values.name,
            email: values.email,
            password: values.password,
            role: values.role,
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
            <Form onSubmit={handleSubmit}>
              <FormGroup className="row">
                <Col sm="6">
                  <Input
                    name="name"
                    type="text"
                    bsSize="lg"
                    placeholder="Name"
                    aria-label="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                </Col>
              </FormGroup>
              <FormGroup className="row">
                <Col sm="6">
                  <Input
                    name="email"
                    type="text"
                    bsSize="lg"
                    placeholder="Email"
                    aria-label="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </Col>
              </FormGroup>

              <FormGroup className="row">
                <Col sm="6">
                  <Input
                    name="password"
                    type="password"
                    bsSize="lg"
                    placeholder="Password"
                    aria-label="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                </Col>
              </FormGroup>
              <FormGroup className="row">
                <Col sm="6">
                  <Input
                    name="role"
                    type="text"
                    bsSize="lg"
                    placeholder="Role"
                    aria-label="role"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.role}
                  />
                </Col>
              </FormGroup>

              <FormGroup className="row my-5">
                <Col md={{ size: 5 }}>
                  <Button
                    type="submit"
                    className="btn btn-primary btn-block"
                    aria-label="Register"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Authenticating...' : 'Register'}
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

function mapDispatchToProps(dispatch, ownProps) {
  return bindActionCreators({ formActionDispatch: ownProps.action }, dispatch);
}

export default connect(null, mapDispatchToProps)(RegisterForm);
