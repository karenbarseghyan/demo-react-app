import React, {Component} from 'react';

class User extends Component {
    constructor(props){
        super(props);
    };

    render() {
        return(
        <div>Your name is {this.props.name} </div>
        )
    }

};

export default User;


/*class Product {
    name = 'bananas';
    price = '1$';
    description = 'Fresh bananas';
    getname() {
        console.log(this.name);
    }
    getprice() {
        console.log(this.price);
    }
    getdescription() {
        console.log(this.description);
    }
};

export default Product;*/