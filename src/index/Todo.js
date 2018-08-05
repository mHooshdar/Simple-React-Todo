import React, { Component } from 'react';
import './Todo.css';
import remove from './assets/remove.png';
import edit from './assets/edit.png';
import next from './assets/next.png';
import prev from './assets/prev.png';

class Todo extends Component {
  constructor (props) {
    super(props);

    this.state={
      text: this.props.text
    }

    this.remove = this.remove.bind(this);
    this.edit = this.edit.bind(this);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }
  remove(){
    this.props.remove(this.props.id);
  }
  edit(){
    var todo = prompt("Please edit this", this.props.text);
    if (todo !== null && todo !== "") {
      this.setState({
        text: todo
      })
    }
    this.props.edit(this.props.id, todo);
  }
  next(){
    this.props.next(this.props.id);
  }
  prev(){
    this.props.prev(this.props.id);
  }

  render() {
    let start = false;
    let end = false;
    let backgroundColor;
    if(this.props.mode === 0){
      start = true;
    }
    else if(this.props.mode === 2){
      end = true;
    }

    if(this.props.mode === 0){
      backgroundColor = "green";
    }
    else if(this.props.mode === 1){
      backgroundColor = "blue";
    }
    else if(this.props.mode === 2){
      backgroundColor = "red";
    }
    return (
      <div className="todo" style={{borderColor: backgroundColor}}>
        <div className="buttons-container">
          <img onClick={this.remove} src={remove} className="todo-buttons remove"/>
          <img onClick={this.edit} src={edit} className="todo-buttons edit"/>
        </div>
        <div className="text-container">
          {this.state.text}
        </div>
        <div className="next-prev-container">
          {
            end ? (<img className="next-prev-buttons-empty"/>) : (<img onClick={this.next} src={next} className="next-prev-buttons next"/>)
          }
          {
            start ? (<img className="next-prev-buttons-empty"/>) : (<img onClick={this.prev} src={prev} className="next-prev-buttons prev"/>)
          }
        </div>
      </div>
    );
  }
}

export default Todo;
