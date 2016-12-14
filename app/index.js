/**
 * Created by sunzhuoyi on 16/12/14.
 */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router,Route,Link } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import App from './containers/App'
const history = createBrowserHistory();


ReactDOM.render(
  <Router history={history}>
      <Route path="/" component={App}/>
  </Router>,
  document.getElementById('main')
);
