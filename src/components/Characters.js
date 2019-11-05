import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Characters = ({ characters }) => {
  const cards = characters.map((character, i) => {
    return (
      <li key={character._id || i}>
        <Card {...character} />
      </li>
    );
  });

  return (
    <ul>
      {cards}
    </ul>
  );
  
};

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string,
    photoUrl: PropTypes.string
  }))
};

export default Characters;
