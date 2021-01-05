import React from 'react';

const ViewProfile = (props) => {
  const { email, name } = props.data;
  return (
    <div>
      <p>name: {name}</p>
      <p>email: {email}</p>
    </div>
  );
};

export default ViewProfile;
