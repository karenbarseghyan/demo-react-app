import React from 'react';
import Name from './Name';
import Surname from './Surname';
import Age from './Age';

function Person (props) {
    const {name} = props;
    const {surname} = props;
    const {age} = props;

    return (
      <>
        <h1> Hello </h1>
        <Name name = {name} />
        <Surname surname = {surname} />
        <Age age = {age} />
      </>
    );
  }

  export default Person;
  
  