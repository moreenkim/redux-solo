import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
// const DetailView = ({ data: { name, phone, email, description } }) => {
// //   return (
//     <div>
//       <p>name: {name}</p>
//       <p>phone: {phone}</p>
//       <p>email: {email}</p>
//       <p>description: {description}</p>
//     </div>
//   );
// };

const DetailView = (props) => {
  const { name, description, photo, rating, _id } = props.data;
  return (
    <Container>
      <Row>
        <Col md="8">
          <h1>{name}</h1>
          <p>{description}</p>
        </Col>

        <Col md="4">
          <img
            src={`http://localhost:5000/uploads/${photo}`}
            className="img-thumbnail"
            alt=""
          />
          <h1 className="text-center my-4"> </h1>
          {rating ? (
            <div>
              <span className="badge badge-secondary badge-success rounded-circle p-3">
                {rating}
              </span>
              <p> Rating </p>
            </div>
          ) : null}

          <Link
            to={`/add-review/${_id}`}
            className="btn btn-light btn-block my-3"
          >
            <i class="fas fa-pencil-alt"></i>
            Write a Review
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailView;
