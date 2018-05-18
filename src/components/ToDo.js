import React, { Component } from 'react';

 class ToDo extends Component {
   removeItem(e) {
        this.props.removeTodo(ToDo);
    }
   render() {
     return (
       <li>
         <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
         <span>{this.props.description}</span>
         { this.props.ToDo.map((ToDo) => {
                    return <li onClick={() => { this.removeTodo(ToDo)}} key={ToDo}>{ ToDo }</li>
                })}
       </li>
     );
   }
 }

 export default ToDo;
