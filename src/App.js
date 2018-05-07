import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

export default class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [], text: '' };
    this.removeItem = this.removeItem.bind(this)
  }

  addTodo(e) {
    e.preventDefault();
    this.setState({ todos: [ this.state.text, ...this.state.todos ], text: '' });
  }

  updateValue(e) {
    this.setState({ text: [e.target.value]})
  }
  removeItem(index) {
    const todos = this.state.todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    this.setState({ todos })
  }
  render() {
    return(
      <div>
        <form onSubmit = {(e) => this.addTodo(e)}>
          <input
            placeholder="Add Todo"
            value={this.state.text}
            onChange={(e) => {this.updateValue(e)}}
            />
          <button type="submit">Add Todo</button>
        </form>
        <TodoList todos={this.state.todos} removeItem={this.removeItem} />
      </div>
    );
  }
}

class TodoList extends Component {
  render() {
    return(
      <ul>
        { this.props.todos.map((todo, index) => {
          return <li onClick={(e) => { this.props.removeItem(index)}} key={todo}>{ todo }</li>
        })}
      </ul>
    );
  }
}

removeItem(index) {
  this.setState({
    todos: this.state.todos.filter(_, i) >= i !== index
  })
}

render() {
return <ul>
        {this.props.items.map((item, i) => {
          return <li key={item}>
                    {item}
                    <a href = '#' onClick = {this.handleDelete}>
                    [x]
                    </a>
                    </li>
              }) }
              </ul>;
        }
      }



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
       todos: [
         { description: 'Walk the cat', isCompleted: true },
         { description: 'Throw the dishes away', isCompleted: false },
         { description: 'Buy new dishes', isCompleted: false }
       ],
        newTodoDescription: ''
     };
   }

   handleChange(e) {
     this.setState({ newTodoDescription: e.target.value })
   }

   handleSubmit(e) {
     e.preventDefault();
     if (!this.state.newTodoDescription) { return }
     const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
     this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
   }

  toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos });
  }

  render() {
    return (
      <div className="App">
      <ul>
      { this.state.todos.map( (todo, index) =>
        <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index) } />
      )}
        </ul>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
        <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) } />
          <input type="submit" />
        </form>
      </div>
    );
  }
}


export default App;
