import React from 'react';

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
  const { name, phone, email, description } = props.data;
  return (
    <div>
      <p>name: {name}</p>
      <p>phone: {phone}</p>
      <p>email: {email}</p>
      <p>description: {description}</p>
    </div>
  );
};

export default DetailView;
