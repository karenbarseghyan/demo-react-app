import React from 'react';
import Name from './Classes/Name';
import Price from './Classes/Price';
import Description from './Classes/Description';


function Product (props) {
    const {name} = props;
    const {price} = props;
    const {description} = props;

    return (
        <>
          <h1> Hello </h1>
          <Name name = {name} />
          <Price price = {price} />
          <Description description = {description} />
        </>
      );
    }
  
export default Product;
