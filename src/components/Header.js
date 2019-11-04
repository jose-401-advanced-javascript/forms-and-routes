import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/list">Character List</Link>
      </nav>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
