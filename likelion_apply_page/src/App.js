import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import Main from './components/main';
import Apply from './components/apply';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact path="/"
          component={Main}
        />
        <Route
          path="/apply"
          component={Apply}
        />
      </Switch>
    </Router>
  );
}

export default App;
