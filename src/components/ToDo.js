import React, { Component } from 'react';

 class ToDo extends Component {
   removeItem(e) {
        this.props.removeTodo(todo);
    }
   render() {
     return (
       <li>
         <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
         <span>{this.props.description}</span>
         { this.props.todo.map((todo) => {
                    return <li onClick={() => { this.removeTodo(todo)}} key={todo}>{ todo }</li>
                })}
       </li>
     );
   }
 }

 export default ToDo;
