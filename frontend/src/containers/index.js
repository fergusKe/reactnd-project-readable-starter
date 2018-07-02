import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// import 'bootstrap/scss/_functions.scss';
// import 'bootstrap/scss/bootstrap.scss';

// import Home from '../containers/Home/Home';
import ListPosts from '../containers/ListPosts/ListPosts';
import NotFound from '../containers/NotFound/NotFound';

// @import 'bootstrap/scss/_functions.scss';
// @import './helpers/_variables';
// @import 'bootstrap/scss/bootstrap.scss';

const Main = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={ListPosts} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Main;
