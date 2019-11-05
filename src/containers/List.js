import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Characters from '../components/Characters';
import { getSearchedCharacter } from '../services/avatar-api';

export default class List extends Component {
  state = {
    name: '',
    searched: []
  }

  static propTypes = {
    match: PropTypes.object.isRequired
  }

  componentDidMount() {
    const name = this.props.match.params; 
    getSearchedCharacter(name.name)
      .then(searched => this.setState({ searched }));
  }

  render() {
    const { searched } = this.state;
    return (
      <Characters characters={searched} />
    );
  }
}
