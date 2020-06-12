import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import LandingPage from './Pages/LandingPage';
import Home from './Components/Home';
import TestPage from './Pages/TestPage';
import Navigation from './Components/NavigationBar';


function App() {
  return (
    <BrowserRouter>
      <div>
      <Navigation/>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/LandingPage" component={LandingPage} />
        <Route path="/TestPage" component={TestPage} />
        <Route component={Home}/>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
