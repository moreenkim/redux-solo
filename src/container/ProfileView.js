import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userSelectors from '../store/users/reducer';
import * as userActions from '../store/users/actions';

import ViewProfile from '../component/ViewProfile';
import { bindActionCreators } from 'redux';
import { Spinner } from 'reactstrap';

export class ProfileView extends Component {
  componentDidMount() {
    this.props.userAuthenticatedAction(this.props.token);
  }

  render() {
    console.log('render profile:', this.props.profile.asMutable());
    const profile = this.props.profile.asMutable();
    console.log('object keys:', Object.keys(profile).length);
    if (Object.keys(profile).length) {
      return (
        <div>
          <h1>Profile</h1>

          <ViewProfile data={profile} />
        </div>
      );
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
    profile: userSelectors.userAuthenticatedSelector(state),
    token: userSelectors.getUserToken(state),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      userAuthenticatedAction: userActions.userAuthenticatedAction,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView);
