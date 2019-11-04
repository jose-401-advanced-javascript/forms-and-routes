import React from 'react';
import PropTypes from 'prop-types';

const Home = ({ character }) => {
  return (
    <>
      <img src={character.photoUrl} alt={character.name} />
      <p>{character.name}</p>
    </>
  );
}; 

Home.propTypes = {
  character: PropTypes.shape({
    photoUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};
