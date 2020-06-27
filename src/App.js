import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Home from './Pages/Home';
import Navigation from './Components/NavigationBar';
import CoinPage from './Pages/CoinPage';


function App() {
  return (
    <BrowserRouter>
      <div>
      <Navigation/>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/CoinPage" component={CoinPage} />
        <Route component={Home}/>
      </Switch>
      </div>
    </BrowserRouter>
  );
}


export default App;
