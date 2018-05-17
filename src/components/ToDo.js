import React, { Component } from 'react';

class ToDo extends Component {

  }
  render() {
     return (
       <li>
       {this.props.todos.map((todo, i) => {
         return <ul key = {item} >
                    {item}
                    <a href = '#' onClick ={this.props.handleRemove.bind(null, todo) }>
                    [x]
                    </a>
                    </ul>
       }}
       <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
         <span>{ this.props.description }</span>
         <button onClick = {props.deleteEvent} > Delete </button>
         { this.props.todos.map((todo) => {

         })}
      </li>

     );
   }
 }

export default ToDo;
