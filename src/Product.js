import React, {Component} from 'react';

class Name extends Component {
    constructor(props){
        super(props);
    };

    render() {
        return(
        <div> {this.props.name} </div>
        )
    }
};

class Price extends Component {
  constructor(props){
      super(props);
  };

  render() {
      return(
      <div> {this.props.price} </div>
      )
  }
};
class Description extends Component {
  constructor(props){
      super(props);
  };

  render() {
      return(
      <div> {this.props.description} </div>
      )
  }
};


export {Name, Price, Description};



