import React, {Component} from 'react';

class Description extends Component {
    render(){
        const {description} = this.props;
        return(
           <p>{description}</p> 
            
        )
    }
}

export default Description;