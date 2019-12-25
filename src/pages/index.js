import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Me from './Me';

const Pages = ({ user }) => {
  return (
    <Router>
        <Switch>
            <Route exact path="/">
                <Me user={user} />
            </Route>
        </Switch>
    </Router>
  );
};

export default Pages;