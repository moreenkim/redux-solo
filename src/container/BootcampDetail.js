import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as bootcampSelectors from '../store/bootcamps/reducer';
import * as bootcampActions from '../store/bootcamps/actions';
import { bindActionCreators } from 'redux';
import DetailView from '../component/DetailView';
import { Spinner } from 'reactstrap';

export class BootcampDetail extends Component {
  componentDidMount() {
    //debugger;
    this.props.fetchBootcamp(this.props.match.params.id);
  }

  render() {
    console.log('render bootcamp:', this.props.bootcamp.asMutable());
    const bootcamp = this.props.bootcamp.asMutable();
    console.log('object keys:', Object.keys(bootcamp).length);
    console.log('data', bootcamp.data);
    if (Object.keys(bootcamp).length) {
      //debugger;
      return (
        <div>
          <DetailView data={bootcamp.data} />
        </div>
      );
    }
    return (
      <div>
        <h1>Bootcamp</h1>
        <Spinner color="primary" style={{ width: '3rem', height: '3rem' }} />
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
  return bindActionCreators(
    {
      fetchBootcamp: bootcampActions.fetchBootcamp,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(BootcampDetail);
