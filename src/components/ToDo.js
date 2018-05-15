import React, { Component } from 'react';

class ToDo extends Component {
  removeItem(e) {
      this.props.removeTodo(item);
  }
  render() {
     return (
       <li>
       <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
         <span>{ this.props.description }</span>
       </li>
       <ul>
           { this.props.todos.map((todo) => {
               return <li onClick={() => { this.removeItem(todo)}} key={todo}>{ todo }</li>
           })}
       </ul>
     );
   }
 }

export default ToDo;
