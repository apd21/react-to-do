import React, { Component } from 'react';

 class ToDo extends Component {
   render() {
     return (
       <li>
         <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
         <span>{this.props.description}</span>
         { this.props.todos.map((todo) => {
                    return <li onClick={() => { this.removeItem(todo)}} key={todo}>{ todo }</li>
                })}
       </li>
     );
   }
 }

 export default ToDo;
