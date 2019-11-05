import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../components/Form';
import { getRandomCharacter } from '../services/avatar-api';

export default class Home extends Component {
  state = {
    character: {},
    name: ''
  }

  static propTypes = {
    history: PropTypes.object.isRequired,
  }

  componentDidMount() {
    getRandomCharacter()
      .then((fetchedChar) => {
        this.setState({
          character: fetchedChar[0]
        });
      });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.history.push(`/list/${this.state.name}`);
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleOnClick = () => {
    getRandomCharacter()
      .then((fetchedChar) => {
        this.setState({
          character: fetchedChar[0]
        });
      });
  }

  render() {
    return (
      <>
        <img src={this.state.character.photoUrl} alt={this.state.character.name} />
        <p>{this.state.character.name}</p>
        <button onClick={this.handleOnClick}>Get Random</button>
        <Form name={this.state.name} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
      </>
    );
  }  
}
