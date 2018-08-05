import React, { Component } from 'react';
import './TodoContainer.css';
import Todo from './Todo';

class TodoContainer extends Component {
  constructor (props) {
    super(props);

    this.state= {
      todos: []
    };
    this.addClick = this.addClick.bind(this);
  }

  addClick(){
    this.setState(prevState => {
      
    });
  }

  componentDidMount(){
    if(this.props.mode === 0){
      this.setState({
        todos: [
          {
            id: "0-1",
            text: "text 1, text1 1 k 1k1 k1 kaslkd asd laks",
            mode: 0
          },
          {
            id: "0-2",
            text: "text 2, text2 2 k 1k1 k1 kaslkd asd laks",
            mode: 0
          },
          {
            id: "0-3",
            text: "text 3, text3 1 k 1k1 k1 kaslkd asd laks",
            mode: 0
          },
          {
            id: "0-4",
            text: "text 4, text4 1 k 1k1 k1 kaslkd asd laks",
            mode: 0
          },
          {
            id: "0-5",
            text: "text 5, text5 1 k 1k1 k1 kaslkd asd laks",
            mode: 0
          },
        ]
      })
    }
    else if(this.props.mode === 1){
      this.setState({
        todos: [
          {
            id: "1-1",
            text: "text 1, text1 1 k 1k1 k1 kaslkd asd laks",
            mode: 1
          },
          {
            id: "1-2",
            text: "text 2, text2 2 k 1k1 k1 kaslkd asd laks",
            mode: 1
          },
          {
            id: "1-3",
            text: "text 3, text3 1 k 1k1 k1 kaslkd asd laks",
            mode: 1
          },
          {
            id: "1-4",
            text: "text 4, text4 1 k 1k1 k1 kaslkd asd laks",
            mode: 1
          },
          {
            id: "1-5",
            text: "text 5, text5 1 k 1k1 k1 kaslkd asd laks",
            mode: 1
          },
        ]
      })
    }
    else if(this.props.mode === 2){
      this.setState({
        todos: [
          {
            id: "2-1",
            text: "text 1, text1 1 k 1k1 k1 kaslkd asd laks",
            mode: 2
          },
          {
            id: "2-2",
            text: "text 2, text2 2 k 1k1 k1 kaslkd asd laks",
            mode: 2
          },
          {
            id: "2-3",
            text: "text 3, text3 1 k 1k1 k1 kaslkd asd laks",
            mode: 2
          },
          {
            id: "2-4",
            text: "text 4, text4 1 k 1k1 k1 kaslkd asd laks",
            mode: 2
          },
          {
            id: "2-5",
            text: "text 5, text5 1 k 1k1 k1 kaslkd asd laks",
            mode: 2
          },
        ]
      })
    }
  }
  render() {
    return (
      <div className="todo-top">
        <p className="text-header">5 in TODO</p>
        <div className="todo-container">
          {this.state.todos.map((todo) => 
            <Todo key={todo.id} id={todo.id} text={todo.text} mode={todo.mode}/>
          )}
        </div>
        <div className="add-panel">
          <input type="text" className="add-text"/>
          <button className="add-button" onClick={this.addClick}>Add</button>
        </div>
      </div>
    );
  }
}

export default TodoContainer;
