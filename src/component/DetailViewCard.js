import React from 'react';
import { Link } from 'react-router-dom';

const DetailViewCard = (props) => {
  const { name, phone, email, description, id } = props.data;

  return (
    <div>
      <Link to={`/bootcamps/${id}`}>{name}</Link>
      <p>phone: {phone}</p>
      <p>email: {email}</p>
      <p>description: {description}</p>
      <p>id: {id}</p>
    </div>
  );
};

export default DetailViewCard;
