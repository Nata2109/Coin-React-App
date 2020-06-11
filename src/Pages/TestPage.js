import React from 'react';
import logo from '.././logo.svg';
import { Button } from 'antd';
import '.././App.css';
import { Link } from 'react-router-dom'

function TestPage() {
    return (
      <div className="TestPage">
      

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1> This is the Test Page </h1>
          </a>
        </header>
      </div>
    );
  }
  
  export default TestPage;