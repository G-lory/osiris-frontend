import React from 'react';
import './App.css';
import Login from './containers/login';
import Home from './containers/home';
import { Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header style={{ 'minHeight': 50, 'borderBottom': '1px solid #ccc' }}></header>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
