import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// import 'bootstrap/scss/_functions.scss';
// import 'bootstrap/scss/bootstrap.scss';

// import Home from '../containers/Home/Home';
import ListPosts from '../containers/ListPosts/ListPosts';
import NewPostForm from '../containers/NewPostForm/NewPostForm';
import EditPostForm from '../containers/EditPostForm/EditPostForm';
import PostDetail from '../containers/PostDetail/PostDetail';
import NotFound from '../containers/NotFound/NotFound';

// @import 'bootstrap/scss/_functions.scss';
// @import './helpers/_variables';
// @import 'bootstrap/scss/bootstrap.scss';

const Main = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={ListPosts} />
      <Route exact path="/posts/new" component={NewPostForm} />
      <Route exact path="/posts/:category" component={ListPosts} />
      <Route exact path="/posts/:id/edit" component={EditPostForm} />
      <Route exact path="/:category/:post_id" component={PostDetail} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Main;
