import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import ListTaker from './information';
import './App.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
      <Route exact path="/information" component={ListTaker}/>
  </Switch>
);

export default App;
