import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class Main extends Component {
  static propTypes = {
    title: PropTypes.string
  }

  render() {
    return (
      <>
        <Header title={'Avatar: The Last Airbender'} />
        <Footer />
      </>
    );
  }
}
