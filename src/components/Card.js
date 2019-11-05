import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ _id, name, photoUrl }) => {
  return (
    <div key={_id}>
      <img src={photoUrl} alt={name} />
      <p>{name}</p>
    </div>
  );
};

Card.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string,
  photoUrl: PropTypes.string
};

export default Card;
