import React, {Component} from 'react';

class Counter extends Component {
    constructor() {
        super();
        this.state = {count:0};
        this.handleDecrementClick = this.handleDecrementClick.bind(this);
        this.handleIncrementClick = this.handleIncrementClick.bind(this);
    }

    
    handleDecrementClick() {
        let {count} = this.state;
        count--;
        this.setState({count:count});
    };
    handleIncrementClick () {
        let {count} = this.state;
        count++;
        this.setState({count:count});
    };
    render() {
        return (
            <div> 
                <button onClick = {this.handleDecrementClick}> Decrement -</button>
                <span>{this.state.count}</span>
                <button onClick = {this.handleIncrementClick}> Increment + </button>
            </div>
        )
    }
}

export default Counter;