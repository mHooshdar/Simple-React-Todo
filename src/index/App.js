import React, { Component } from 'react';
import './App.css';
import Todocontainer from './TodoContainer';

class App extends Component {
  render() {
    return (
      <div className="todo-list-container">
        <Todocontainer mode={0}/>
        <Todocontainer mode={1}/>
        <Todocontainer mode={2}/>
      </div>
    );
  }
}

export default App;
