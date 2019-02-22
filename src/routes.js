import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

const AppLayout = lazy(() => import('@pages/_Layout'));
const NotFound = lazy(() => import('@pages/_NotFound'));
const Home = lazy(() => import('@pages/Home'));
const About = lazy(() => import('@pages/About'));

const MainRouter = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <AppLayout exact path="/" component={Home} />
          <AppLayout path="/about" component={About} />
          <AppLayout component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default MainRouter;
