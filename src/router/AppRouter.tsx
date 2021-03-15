import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import IndexPage from '../pages';
import TopicListPage from '../pages/topicList';
import TaskPage from '../pages/taskPage';
import TeacherOffice from "../pages/teacherOffice";

const AppRouter: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route path="/topics" component={TopicListPage} />
      <Route path="/task" component={TaskPage} />
      <Route path="/teacherOffice" component={TeacherOffice} />
      <Route path="*" component={() => <p>404: Page not found</p>} />
    </Switch>
  </Router>
);

export default AppRouter;



