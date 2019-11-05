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
import Details from '../containers/Details';

export default function App() {
  
  return (
    <Router>
      <>
        <Header title={'Avatar: The Last Airbender'} />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/details/:id" component={Details} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

App.PropTypes = {
  title: PropTypes.string
};
