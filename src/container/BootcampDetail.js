import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as bootcampSelectors from '../store/reducer';
import * as bootcampActions from '../store/actions';

export class BootcampDetail extends Component {
  componentDidMount() {
    debugger;
    this.props.fetchBootcamp('5d725a1b7b292f5f8ceff788');
  }

  render() {
    console.log('render bootcamp:', this.props.bootcamp);
    return (
      <div>
        <h1>Bootcamps</h1>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    bootcamp: bootcampSelectors.getBootcamp(state),
  };
}

function mapDispatchToProps(dispatch) {
  return (
    {
      fetchBootcamp: bootcampActions.fetchBootcamp,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(BootcampDetail);
