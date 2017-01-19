import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Main from './components/main'; //main
import Home from './components/home'; //index

const componentRoutes = {
  component: Main,
  path: '/',
  indexRoute: { component: Home },
  childRoutes: [
    {
      path: 'feature',
      getComponent(location, cb) {
        System.import('./components/feature')
          .then(module => cb(null, module.default));
      }
    }
  ]
};

const Routes = () => {
  return (
    <Router history={hashHistory}  routes={componentRoutes} />
  );
};

export default Routes;
