import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as bootcampSelectors from '../store/bootcamps/reducer';
import * as bootcampActions from '../store/bootcamps/actions';
import { bindActionCreators } from 'redux';
import { Spinner, Container } from 'reactstrap';

import DetailViewCard from '../component/DetailViewCard';

export class AllBootcamps extends Component {
  componentDidMount() {
    this.props.fetchAllBootcamps();
  }

  render() {
    console.log('render all bootcamps:', this.props.bootcamps.asMutable());
    let bootcamps = this.props.bootcamps.asMutable();
    console.log('Array Length:', Object.keys(bootcamps).length);
    if (Object.keys(bootcamps).length && bootcamps.count) {
      //debugger;
      bootcamps = bootcamps.data.map((bootcamp) => {
        return <DetailViewCard data={bootcamp} />;
      });
      return <Container style={{ marginTop: '1em' }}> {bootcamps} </Container>;
    }
    return (
      <div>
        <Spinner color="primary" style={{ width: '3rem', height: '3rem' }} />
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    bootcamps: bootcampSelectors.getAllBootcamps(state),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchAllBootcamps: bootcampActions.fetchAllBootcamps,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(AllBootcamps);
