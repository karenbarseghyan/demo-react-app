import React, {Component} from 'react';
// import { useState } from 'react';
// import ChildComponent from './childComponent';
import './Styles/main.css';


class App extends Component{ 
      constructor (props) {
        super(props);
        this.state = {
          color: 'green', 
        }     
      }  
      handleColorChange = () => {
        if(this.state.color === 'green') {
          this.setState({
            color: 'red'
        })
        } else {
          this.setState({
            color: 'green'
        })
      }
    }
      
  render () {    
    return (
      
        <>
          <h1 style = {{color: this.state.color}}>
              Hello World
            </h1>
            
            <h2> 
              
              <button onClick = {this.handleColorChange}> Change Color </button>
            </h2>
        </>
        
    );
  }
}
export default App;
