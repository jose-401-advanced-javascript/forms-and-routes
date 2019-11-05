import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Details extends Component {
  state = {
    character: []
  }

  static propTypes = {
    character: PropTypes.arrayOf(PropTypes.shape({
      photoUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }))
  }

  render() {
    return (
      <div></div>
    );
  }
}
