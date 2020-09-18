import React from 'react';
import ChildComponent from './childComponent';
import './main.css';


function App() { 
    const someStyle = {
      color: 'red',
      fontSize: '50px'
    } 
  return (
    <div>
      <>
        <h1 style = {{...someStyle}}>
            Hello World
          </h1>
          <h2> Hi </h2>
          <h2> 
            <ChildComponent />
          </h2>
      </>
      
    </div>
  );
}

export default App;
