import React, { Component } from 'react';
import './App.css';
import Todocontainer from './TodoContainer';

class App extends Component {
  constructor (props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  next(todo){
    console.log(todo);
    if(todo.mode === 0){
      todo.mode = todo.mode + 1;
      this.todo1.addNextPrev(todo);
    }
    else if(todo.mode === 1){
      todo.mode = todo.mode + 1;
      this.todo2.addNextPrev(todo);
    }
  }

  prev(todo){
    if(todo.mode === 1){
      todo.mode = todo.mode - 1;
      this.todo0.addNextPrev(todo);
    }
    else if(todo.mode === 2){
      todo.mode = todo.mode - 1;
      this.todo1.addNextPrev(todo);
    }
  }

  render() {
    return (
      <div className="todo-list-container">
        <Todocontainer ref={(todo0) => {this.todo0 = todo0;}} prev={this.prev} next={this.next} mode={0}/>
        <Todocontainer ref={(todo1) => {this.todo1 = todo1;}} prev={this.prev} next={this.next} mode={1}/>
        <Todocontainer ref={(todo2) => {this.todo2 = todo2;}} prev={this.prev} next={this.next} mode={2}/>
      </div>
    );
  }
}

export default App;
