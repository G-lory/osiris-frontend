import React from 'react';
import './App.css';
import Login from './containers/login';
import Home from './containers/home';
import Header from './components/header';
import Project from './containers/project';
import { Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Route path="/" component={Header} />
        <div className="app-content">
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/project" component={Project} />
        </div>
      </div>
    </Router>
  );
}

export default App;
