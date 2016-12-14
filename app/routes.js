/**
 * Created by sunzhuoyi on 16/12/14.
 */
import React from 'react';
import { Router,Route, IndexRedirect } from 'react-router';
import App from './containers/App';

export default (
  <Router>
    <Route path="/" component={App}>
      {/*<Route path="about" component={About}/>*/}
     {/* <Route path="users" component={Users}>
        <Route path="/user/:userId" component={User}/>
      </Route>*/}
     {/* <Route path="*" component={NoMatch}/>*/}
    </Route>
  </Router>
)
