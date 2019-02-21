import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import AppLayout from '@pages/_Layout';
import Home from '@pages/Home';
import About from '@pages/About';
import NotFound from '@pages/_NotFound';

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <AppLayout exact path="/" component={Home} />
        <AppLayout path="/about" component={About} />
        <AppLayout component={NotFound} />
      </Switch>
    </Router>
  );
};

export default MainRouter;
