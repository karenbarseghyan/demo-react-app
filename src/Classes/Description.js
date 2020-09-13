import React, {Component} from 'react';

class Description extends Component {
    constructor(props){
        super(props);
    };

    render() {
        return(
        <div>{this.props.decription} </div>
        )
    }

};

export default Description;