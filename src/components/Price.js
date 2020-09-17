import React, {Component} from 'react';

class Price extends Component {
    constructor (props){
        super(props);
        this.state = {
            price: this.props.price,
            rate: 487
        };
    }
    changeCurrency = () => {
        let {price, rate} = this.state;
        let sign = price[price.length - 1];
        if (sign === '$'){
            price = parseFloat(price) * rate + '֏';
            this.setState({price});
        } else if (sign === '֏'){ 
            price = parseFloat(price)/rate + '$';
            this.setState({price});

        }
    }
    render(){ 
        return(
            <p>
               {this.state.price}
               <button onClick={this.changeCurrency}>
                    Change Currency
                </button>
            </p> 
            
        )
    }
}

export default Price;