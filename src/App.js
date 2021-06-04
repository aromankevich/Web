import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import TodoList from './components/TodoList'
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import About from './components/pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <Router>
          <Navbar/>
          <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/profile' exact component={Profile}/>
              <Route path='/About' exact component={About}/>
          </Switch>
      </Router>
  );
}

export default App;
