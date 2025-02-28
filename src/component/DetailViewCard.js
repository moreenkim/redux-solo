import React from 'react';
import { Link } from 'react-router-dom';

import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardImg,
  Row,
  Col,
} from 'reactstrap';

const DetailViewCard = (props) => {
  const { name, description, id, photo } = props.data;

  return (
    <div>
      <Card>
        <Row>
          <Col md="4">
            <CardImg
              style={{
                marginTop: '1.2em',
                marginLeft: '1em',
                marginBottom: '1.2em',
              }}
              src={`http://localhost:5000/uploads/${photo}`}
            />
          </Col>
          <Col md="8">
            <CardBody>
              <CardTitle tag="h5">
                <Link to={`/bootcamps/${id}`}>{name}</Link>
              </CardTitle>
              <CardText>
                <p>{description}</p>
              </CardText>
            </CardBody>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default DetailViewCard;
