import React from 'react';
import logo from './logo.svg';
import './App.css';
import {sum, multiply} from "./Example.js";
//import sayHello from "./test";

function Person (properties) {
  const name = properties.name;
  const surname = properties.surname;
  return (
    <div>
      <h1> Hello</h1>
      <p>My name is {name} </p>
    </div>
  );
}



function App() {
  /*console.log(Summ(2,4));
  console.log(multiply(2,4));
  function sum(a,b){
    return a + b;
  };
  console.log(sum(2,4));
  console.log(sayHello()); */
  return (
    <div className="App">
      <header className="App-header">
        <Person name = "Karen" />
        <Person name = "Ruben"/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Hello!!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
    </div>
  );
}

export default App;
