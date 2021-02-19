import React from 'react';

import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
require('./ReviewCard.css');

const ReviewCard = (props) => {
  const { title, text: description, rating } = props.data;

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5" className="card-title">
          {title}
        </CardTitle>
        <CardText className="card-text">
          <p>Rating: {rating}</p>
          <p>{description}</p>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default ReviewCard;
