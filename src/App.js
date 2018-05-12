import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

export default class App extends React.component {
  constructor (props) {
    super(props);
    this.state = {text: '', todos: [] }
  }

  handleDelete(itemToDelete) {
    var newItems = {this.state.items.filter((_item) => {
      return _item != itemToDelete
    )}
    this.setState({items: newItems});
  }

  handleSubmit(event) {
    event.preventDefault();
    var text = this.state.text;
    var newitems = this.state.items.concat (text);
    this.setState({text: '', items: newItems});
  }

  handleChange(event) {
    var text = event.target.value;
    this.setState({text: text});
  }

  render() {
    return <div>
            <p> ToDo </p>

            form onSubmit = {this.handleSubmit.bind(this)}>
            <input onChange = {this.handleChange.bind(this)} value = {this.state.text}/>
            <button>
            submit
            </button>
            </form>

            <ToDo
            handleDelete = {this.handleDelete.bind(this)}
            items = {this.state.items}/>
            </div>
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
