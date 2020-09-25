import React, {Component} from 'react';
// import { useState } from 'react';
// import ChildComponent from './childComponent';
import './Styles/main.css';
// import styles from './Styles/app.module.css';
import './Styles/index.css';
import TodoList from './components/TodoList.js';
import AddTodo from './components/AddTodo';


class App extends Component{ 
      constructor (props) {
        super(props);
        this.state = {
          
          todoList : [],

        }
    }
    todoId = 1;
  handleSubmit = (text) => {
     
    this.setState({
      todoList : [{
        text : text,
        todoId : this.todoId
      }
        , ...this.state.todoList],
    })
    this.todoId++;
  }
  handleDelete = (id) => {
    const shallowList = this.state.todoList.filter((todo)=>{
      return(todo.todoId !== id);
    })
    this.setState({
      todoList : [...shallowList]
    })
  }
  
  render () {    
  
    return (
      <main className = "appWrapper">
        <header>
          <h1> ToDo List </h1>
        </header>
        <AddTodo handleSubmit = {this.handleSubmit} />
        <TodoList handleDelete = {this.handleDelete} todoList = {this.state.todoList} />
      </main>
    );
  }
}
export default App;
