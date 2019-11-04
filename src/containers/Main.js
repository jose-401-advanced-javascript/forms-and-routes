import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';

export default class Main extends Component {
  static propTypes = {
    title: PropTypes.string
  }

  render() {
    return (
      <Router>
        <>
          <Header title={'Avatar: The Last Airbender'} />
          <Switch>
            <Route path="/home" component={Home} />
          </Switch>
          <Footer />
        </>
      </Router>
    );
  }
}
