import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';

import './assets/sass/styles.scss';

import store from './store';

import MainRouter from './routes';

const ConnectedApp = () => (
  <Provider store={store}>
    <MainRouter />
  </Provider>
);

const AppWithHot = hot(module)(ConnectedApp);

ReactDOM.render(<AppWithHot />, document.getElementById('app'));
