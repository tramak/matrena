import React from 'react';
import { Router, Switch } from 'react-router';
import { Route } from 'react-router-dom';

import { history } from './history';
import IndexPage from '../pages';

const AppRouter: React.FC = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route path="*" component={() => <p>404: Page not found</p>} />
    </Switch>
  </Router>
);

export default AppRouter;



