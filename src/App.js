import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person';
import {Name, Price, Description} from './Product.js';

function App() {
// const person = new User('John','Smith');
//const person2 = new User('Jack','Vorobey');
// console.log('Person', person);
// console.log('Person2', person2);
  
  return (
    <div className="App">
      <header className="App-header">
        <Person name = "Karen" surname = "Barseghyan" age  = "30"/>
        <Name name ='Bananas' />
        <Price price ='1$' />
        <Description description ='Fresh Bananas' />
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
