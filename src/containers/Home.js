import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Home extends Component {
  state = {
    random: [],
  }


  static propTypes = {
    random: PropTypes.arrayOf(PropTypes.shape({
      photoUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })).isRequired
  }

  render() {
    return (
      <>
        <img src={this.random[0].photoUrl} alt={this.random[0].name} />
        <p>{this.random[0].name}</p>
        <button></button>
      </>
    );
  }
}

