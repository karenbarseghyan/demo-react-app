import React, {Component} from 'react';
// import { useState } from 'react';
// import ChildComponent from './childComponent';
import './Styles/main.css';
import styles from './Styles/app.module.css';


class App extends Component{ 
      constructor (props) {
        super(props);
        this.state = {
          colorClass: styles.yellowClass,
         
        }     
      }  
      handleColorChange = () => {
        if(this.state.colorClass === styles.greenClass) {
          this.setState({
            colorClass: styles.yellowClass
        })
        } else {
          this.setState({
            colorClass: styles.greenClass
        })
      }
    }
      
  render () {    
    return (
      
        <>
          <h1 className = {this.state.colorClass}>
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
