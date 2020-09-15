import React, {Component} from 'react';

class Price extends Component {
  state = {price:1};
  handleChange = () => {
      let {price} = this.state;
      price *= 487;
      this.setState({price:price})
  }
  render() {
      return(
        <div> 
            <button onClick = {this.handleChange}> Change the currency </button>
            <span>{this.state.price}</span>
        </div>
      )
  }
};
export default Price;



