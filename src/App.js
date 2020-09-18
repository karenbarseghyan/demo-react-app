import React from 'react';
import ChildComponent from './childComponent';
import './main.css';


function App() {  
  return (
    <div>
      <>
        <h1 style = {{
          color: 'red',
          fontSize: '50px'
          }}>
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
