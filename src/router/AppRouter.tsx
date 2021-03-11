import React from 'react';
import { Router, Switch } from 'react-router';
import { Route } from 'react-router-dom';

import { history } from './history';
import IndexPage from '../pages';
import TopicListPage from '../pages/topicList';

const AppRouter: React.FC = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route path="/topics" component={TopicListPage} />
      <Route path="*" component={() => <p>404: Page not found</p>} />
    </Switch>
  </Router>
);

export default AppRouter;



