import React from 'react';
import './App.css';
import Login from './containers/login';
import Home from './containers/home';
import Header from './components/header';
import { Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header></Header>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
