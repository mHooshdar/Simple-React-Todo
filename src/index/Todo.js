import React, { Component } from 'react';
import './Todo.css';
import remove from './assets/remove.png';
import edit from './assets/edit.png';
import next from './assets/next.png';
import prev from './assets/prev.png';

class Todo extends Component {
  constructor (props) {
    super(props);

    this.state= {
      backgroundColor: ""
    };
  }
  componentDidMount(){
    if(this.props.mode === 0){
      this.setState({backgroundColor: "green"});
    }
    else if(this.props.mode === 1){
      this.setState({backgroundColor: "blue"});
    }
    else if(this.props.mode === 2){
      this.setState({backgroundColor: "red"});
    }
  }
  
  render() {
    let start = false;
    let end = false;
    if(this.props.mode === 0){
      start = true;
    }
    if(this.props.mode === 2){
      end = true;
    }
    return (
      <div className="todo" style={{borderColor: this.state.backgroundColor}}>
        <div className="buttons-container">
          <img src={remove} className="todo-buttons remove"/>
          <img src={edit} className="todo-buttons edit"/>
        </div>
        <div className="text-container">
          {this.props.text}
        </div>
        <div className="next-prev-container">
          {
            end ? (<img className="next-prev-buttons"/>) : (<img src={next} className="next-prev-buttons next"/>)
          }
          {
            start ? (<img className="next-prev-buttons"/>) : (<img src={prev} className="next-prev-buttons prev"/>)
          }
        </div>
      </div>
    );
  }
}

export default Todo;
