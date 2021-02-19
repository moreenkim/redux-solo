import React, { Component } from 'react';
import * as bootcampActions from '../store/bootcamps/actions';
import * as bootcampSelectors from '../store/bootcamps/reducer';
import { Spinner, Container } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import ReviewCard from '../component/ReviewCard';

class ReviewView extends Component {
  componentDidMount() {
    this.props.readReviewAction(this.props.match.params.id);
  }

  render() {
    let reviews = this.props.reviews.asMutable();
    if (reviews.length) {
      reviews = reviews.map((review) => {
        return <ReviewCard key={review.title} data={review} />;
      });
      return <Container style={{ marginTop: '1em' }}>{reviews}</Container>;
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
    reviews: bootcampSelectors.readReviewSelector(state),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { readReviewAction: bootcampActions.readReviewAction },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ReviewView));
