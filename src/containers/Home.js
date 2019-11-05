import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../components/Form';
import { getRandom } from '../services/avatar-api';

export default class Home extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    random: PropTypes.arrayOf(PropTypes.shape({
      photoUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })).isRequired
  }

  state = {
    random: [],
    name: '',
    string: ''
  }

  componentDidMount() {
    getRandom()
      .then(random => this.setState({ random }));
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.history.push(`/list/${this.state.string}`);
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    return (
      <>
        <img src={this.random[0].photoUrl} alt={this.random[0].name} />
        <p>{this.random[0].name}</p>
        <button>Get Random</button>
        <Form name={this.state.name} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
      </>
    );
  }
}

