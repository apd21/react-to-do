import React, { Component } from 'react';

export default class ToDo extends React.component {

  render () {
    return <ul>
            {this.props.items.map((item, i) => {
              return <li key = {item} >
                        {item}
                        <a href = '#' onClick = {this.handleDelete.bind(null, item)} >
                          [x]
                          </a>
                        </li>
            }) }
            </ul>;
  }
}

class ToDo extends Component {
  render() {
     return (
       <li>
       <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
         <span>{ this.props.description }</span>
       </li>
     );
   }
 }

export default ToDo;
