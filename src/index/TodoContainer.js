import React, { Component } from 'react';
import './TodoContainer.css';
import Todo from './Todo';

class TodoContainer extends Component {
  constructor (props) {
    super(props);

    this.state= {
      todos: [],
      addValue: ""
    };
    this.addClick = this.addClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.remove = this.remove.bind(this);
    this.edit = this.edit.bind(this);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.addNextPrev = this.addNextPrev.bind(this);
  }

  remove(id){
    let todoIndex = 0;
    this.state.todos.forEach(element => {
      if(element.id === id){
        this.state.todos.splice(todoIndex, 1);
      }
      todoIndex++;
    })
    let removedTodo = this.state.todos;
    this.setState({
      todos: removedTodo
    });
  }

  edit(id, text){
    let todoIndex = 0;
    this.state.todos.forEach(element => {
      if(element.id === id){
        this.state.todos[todoIndex].text = text;
      }
      todoIndex++;
    })
    let editedTodo = this.state.todos;
    this.setState({
      todos: editedTodo
    });
  }

  next(id){
    let todo = 0;
    let todoIndex = 0;
    this.state.todos.forEach(element => {
      if(element.id === id){
        todo = element;
        this.state.todos.splice(todoIndex, 1);
      }
      todoIndex++;
    })
    let removedTodo = this.state.todos;
    this.setState({
      todos: removedTodo
    });
    this.props.next(todo);
  }

  prev(id){
    let todo = 0;
    let todoIndex = 0;
    this.state.todos.forEach(element => {
      if(element.id === id){
        todo = element;
        this.state.todos.splice(todoIndex, 1);
      }
      todoIndex++;
    })
    let removedTodo = this.state.todos;
    this.setState({
      todos: removedTodo
    });
    this.props.prev(todo);
  }

  addNextPrev(todo){
    console.log("baaaa");
    this.state.todos.push(todo);
    this.setState({
      todos: this.state.todos
    })
  }

  addClick(){
    if(this.state.addValue === ""){
      alert("Value is empty");
    }
    else{
      let newTodo = {
        id: new Date(),
        text: this.state.addValue,
        mode: this.props.mode
      }
      this.setState({ 
        todos: this.state.todos.concat([newTodo])
      })
    }
  }
  handleChange(event){
    this.setState({addValue: event.target.value});
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
    let header;
    if(this.props.mode === 0){
      header = "TODO";
    }
    else if(this.props.mode === 1){
      header = "DOING";
    }
    else if(this.props.mode === 2){
      header = "DONE";
    }
    return (
      <div className="todo-top">
        <p className="text-header">{this.state.todos.length} in {header}</p>
        <div className="todo-container">
          {this.state.todos.map((todo) => 
            <Todo prev={this.prev} next={this.next} edit={this.edit} remove={this.remove} key={todo.id} id={todo.id} text={todo.text} mode={todo.mode}/>
          )}
        </div>
        <div className="add-panel">
          <input value={this.state.addValue} onChange={this.handleChange} type="text" className="add-text"/>
          <button className="add-button" onClick={this.addClick}>Add</button>
        </div>
      </div>
    );
  }
}

export default TodoContainer;
