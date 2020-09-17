import React, {Component} from 'react';
import Name from './Name.js';
import Price from './Price.js';
import Description from'./Description.js';

class Product extends Component {
    render(){
        const {name, price, description} = this.props;
        return(
            <div>
                <Name name = {name} />
                <Price price = {price} />
                <Description description = {description} />
            </div>
        )
    }
}

export default Product;