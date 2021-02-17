import React, { Component } from 'react';
import { Formik } from 'formik';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Form, FormGroup, Col, Input, Button, Alert } from 'reactstrap';
import * as Yup from 'yup';
import * as errorHandlerSelectors from '../store/errorHandler/reducer';
//import PropTypes from 'prop-types';

const transformMyApiErrors = function (array) {
  const errors = {};
  const field = array.split('`')[1];
  let message = array.split('`').pop().split(') ').pop();
  message = `${field} ${message}`;
  errors[field] = message;

  return errors;
};

export class RegisterForm extends Component {
  static redirect(link) {
    return <Redirect to={link} />;
  }

  static validate(getValidationSchema) {
    return (values) => {
      const validationSchema = getValidationSchema(values);
      try {
        validationSchema.validateSync(values, { abortEarly: false });
        return {};
      } catch (error) {
        return RegisterForm.getErrorsFromValidationError(error);
      }
    };
  }

  constructor(props) {
    super(props);

    this.getValidationSchema = this.getValidationSchema.bind(this);
  }

  getValidationSchema() {
    const validator = {
      name: Yup.string().required('Username is required'),
      email: Yup.string()
        .required('Email is required')
        .email('Please add a valid email'),
      password: Yup.string().required('Password is required'),
      role: Yup.string().required('Please add role'),
    };
    return Yup.object().shape(validator);
  }

  static getErrorsFromValidationError(validationError) {
    const FIRST_ERROR = 0;
    return validationError.inner.reduce((errors, error) => {
      return {
        ...errors,
        [error.path]: error.errors[FIRST_ERROR],
      };
    }, {});
  }

  render() {
    const { initialData } = this.props;
    return (
      <Formik
        initialValues={initialData}
        validate={RegisterForm.validate(this.getValidationSchema)}
        onSubmit={async (values, { setSubmitting, setStatus, setErrors }) => {
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
              const { errorMessage } = this.props;
              const { hasError } = this.props;
              if (hasError) {
                setErrors(transformMyApiErrors(errorMessage));
              } else {
                setStatus('done');
              }
            });
          } catch (error) {
            console.error(error);
          }
        }}
        render={({
          values,
          errors,
          status,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setStatus,
        }) => (
          <div>
            {errors.data && <Alert color="danger">{errors.data}</Alert>}
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

function mapStateToProps(state) {
  return {
    hasError: errorHandlerSelectors.getHasError(state),
    errorMessage: errorHandlerSelectors.getErrorMessage(state),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return bindActionCreators({ formActionDispatch: ownProps.action }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
