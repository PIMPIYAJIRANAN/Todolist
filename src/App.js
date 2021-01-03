import './App.css';
import Todos from "./components/Todos";
import Todoitem from "./components/Todoitem";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";

import React, { Component } from "react";
class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "one",
        complete: true  
      },
      {
        id: 2,
        title: "two",
        complete: true
      },
      {
        id: 3,
        title: "three",
        complete: false
      }
    ]
  }
  // Toggle
  markComplete = (id,title,complete) =>{
    console.log(complete)
    this.setState({todo: this.state.todos.map(todo =>{
      if(todo.id===id){
        todo.complete =!todo.complete
      }
      return todo;
    })});
  }
  delTodo =(id)=>{
      this.setState({todos : [...this.state.todos.filter(todo => todo.id !== id)]})
  }
  render() {
    return (
      <div className="App">
          <Header/>
          <AddTodo></AddTodo>
          <Todos todos={this.state.todos} markComplete= {this.markComplete} delTodo={this.delTodo}></Todos>
      </div>
    );
  }
}

export default App;
