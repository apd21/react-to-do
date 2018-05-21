import React, { Component } from 'react';

 class ToDo extends Component {
   deleteToDo(e) {
         // splice this.props.todos??
    }
   render() {
     return (
       <li>
         <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
         <span>{this.props.description}</span>
         { this.props.todos.map((todo) => {
                      return <li onClick={(e) => { this.removeItem(e)}} key={todo}>{ todo }</li>
                  })}
       </li>

     );
   }
 }

 export default ToDo;
