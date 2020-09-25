import React, {Component} from 'react';
import '../Styles/main.css';
import {IconDelete} from '../SVG/Icons';

class TodoItem extends Component {

    

    
    render() {
        return(
            <div className = 'TodoItem_item'>
                {this.props.todo.text}
                <button onClick = {this.props.handleDelete}> 
                    <IconDelete height = '25px' width = '20px'/>
                </button>
            </div>
        )
    }
}

export default TodoItem;