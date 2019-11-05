import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ name, handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={name} onChange={handleChange} />
      <button>Search</button>
    </form>
  );

};

Form.propTypes = {
  name: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Form;
