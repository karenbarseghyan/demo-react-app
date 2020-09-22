import React, {Component} from 'react';

class AddTodo extends Component {
    constructor (props) {
        super(props);
        this.state = {
            text : '',
        }
    }
    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
          [event.target.name] : event.target.value,
        })
    }
    handleSubmit = (event) => {
        event.preventDefault() 
        this.props.handleSubmit(this.state.text);
        this.setState({text : ''})
    }
    render () {
        
        return(
            <>
                <form onSubmit = {this.handleSubmit}> 
                    <input name = "text"
                        placeholder = "Enter ToDo Value"
                        onChange = {this.handleChange}
                        value ={this.state.text}
                    />
                    <button onClick = {this.handleSubmit}>Add</button>
                </form>
            </>
        )
    }
}

export default AddTodo;