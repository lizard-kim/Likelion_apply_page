import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from './components/main';
import Apply from './components/apply';
import Header from './components/header';
import './App.css';

function App() {
  return (
    <Router>
      <div id="root_box">
        <Header/>
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
      </div>
    </Router>
  );
}

export default App;
