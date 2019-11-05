import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from '../containers/Home';
import List from '../containers/List';
import Details from '../containers/Details';

export default function App() {
  
  return (
    <Router>
      <Header title={'Avatar: The Last Airbender'} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/list/:name" component={List} />
        <Route path="/details/:id" component={Details} />
      </Switch>
      <Footer />
    </Router>
  );
}

App.propTypes = {
  title: PropTypes.string
};
