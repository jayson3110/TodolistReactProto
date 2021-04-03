import React, { Component } from 'react'
import TodoList from './Todolist'
import TodoItems from './TodoItems'
import './App.css';
import './index.css';
class App extends Component {
  render() {
    return (
      <div>
         <TodoList />
         <TodoList />
      </div>
    )
  }
}



export default App;
