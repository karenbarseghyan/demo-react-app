import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Summ, {multiply} from "./Example.js";
//import sayHello from "./test";

function Person (properties) {
  console.log(properties);
  return (
    <div>
      <h1> Hello</h1>
      <p>My name is Karen </p>
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
        <Person surname = "Barseghyan" />
        <Person />
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
          Learn React
        </a>
        
      </header>
    </div>
  );
}

export default App;
